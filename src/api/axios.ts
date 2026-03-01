import { useNotificationStore } from '@/store/notifications';
import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';

interface FailedRequest {
  resolve: (value: unknown) => void;
  reject: (error: unknown) => void;
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: Error | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(null);
  });
  failedQueue = [];
};

//Interceptor for errors and success management
api.interceptors.response.use(
  (response) => {
    /* if (response.data) {
      useNotificationStore.getState().notify(response.data.message, 'success');
    } */
    return response;
  },
  (error) => {
    const { response, request } = error;
    const setCritical = useNotificationStore.getState().setCriticalError;
    const notify = useNotificationStore.getState().notify;
    // (4xx, 5xx)
    if (response) {
      const status = response.status;
      const message =
        response.data?.details?.file?.[0] ||
        response.data?.error ||
        'Internal server error';

      if (status >= 500) {
        setCritical({ message, code: status });
      } else {
        notify(message, 'error');
      }
    }
    // (Server Down / Timeout)
    else if (request) {
      // If no response, it's a infrastructure failure
      const isOnline = window.navigator.onLine; //true if online
      const message = isOnline
        ? 'Server is offline'
        : "You don't have internet access";
      setCritical({ message, code: isOnline ? 0 : -1 });
    } else {
      notify('Internal error while processing the request', 'error');
    }
    return Promise.reject(error);
  },
);

//Interceptor for refresh token
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };
    if (
      error.response?.status !== 401 ||
      originalRequest.url?.includes('/auth/refresh')
    ) {
      return Promise.reject(error);
    }
    if (originalRequest._retry) {
      return Promise.reject(error);
    }
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: () => resolve(api(originalRequest)),
          reject: (err) => reject(err),
        });
      });
    }
    originalRequest._retry = true;
    isRefreshing = true;

    try {
      await api.post('/auth/refresh');
      processQueue();
      return api(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError as Error);
      if (typeof window !== 'undefined') {
        window.location.href = '/login?expired=true';
      }
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);

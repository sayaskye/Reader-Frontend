import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';

interface FailedRequest {
  resolve: (value: unknown) => void;
  reject: (error: unknown) => void;
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
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

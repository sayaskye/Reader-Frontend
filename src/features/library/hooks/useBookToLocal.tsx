import { useState, useCallback, useEffect } from 'react';
import { indexdbService } from '@/services';

interface UseBookToLocalReturn {
  isLoading: boolean;
  downloadProgress: number;
  error: Error | null;
  loadBook: (bookData: BookData) => Promise<string | null>;
  currentUrl: string | null;
  currentBlob: Blob | null;
}

interface BookData {
  id: string;
  url: string;
  fileHash: string;
  [key: string]: any;
}

export const useBookToLocal = (): UseBookToLocalReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [currentBlob, setCurrentBlob] = useState<Blob | null>(null);

  const cleanup = useCallback(() => {
    if (currentUrl) {
      URL.revokeObjectURL(currentUrl);
      setCurrentUrl(null);
    }
  }, [currentUrl]);

  const loadBook = useCallback(
    async (bookData: BookData): Promise<string | null> => {
      setIsLoading(true);
      setDownloadProgress(0);
      setError(null);

      try {
        const localBook = await indexdbService.getBook(bookData.id);

        if (localBook && localBook.fileHash === bookData.fileHash) {
          setDownloadProgress(100);
          const url = URL.createObjectURL(localBook.fileBlob);
          setCurrentBlob(localBook.fileBlob);
          cleanup();
          setCurrentUrl(url);
          setIsLoading(false);
          return url;
        }

        const response = await fetch(bookData.url);

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const contentLength = response.headers.get('content-length');
        const total = contentLength ? parseInt(contentLength, 10) : 0;

        if (!response.body) throw new Error('Response body is null');

        const reader = response.body.getReader();
        let loaded = 0;
        const chunks: Uint8Array[] = [];

        while (true) {
          const { done, value } = await reader.read();

          if (done) break;

          chunks.push(value);
          loaded += value.length;

          if (total > 0) {
            const progress = Math.round((loaded / total) * 100);
            setDownloadProgress(progress);
          }
        }

        //@ts-ignore TODO: remove this ts-ignore
        const fileBlob = new Blob(chunks, { type: 'application/epub+zip' });

        const { url: remoteUrl, ...metadata } = bookData;
        await indexdbService.saveBook({
          id: bookData.id,
          fileBlob,
          metadata: {
            ...metadata,
            fileHash: bookData.fileHash,
          },
        });

        const newUrl = URL.createObjectURL(fileBlob);
        setCurrentBlob(fileBlob);
        cleanup();
        setCurrentUrl(newUrl);
        setIsLoading(false);
        return newUrl;
      } catch (err) {
        const formattedError =
          err instanceof Error ? err : new Error('Failed to load book');
        setError(formattedError);
        setIsLoading(false);
        return null;
      }
    },
    [cleanup],
  );

  useEffect(() => {
    return () => cleanup();
  }, [cleanup]);

  return {
    isLoading,
    downloadProgress,
    error,
    loadBook,
    currentUrl,
    currentBlob,
  };
};

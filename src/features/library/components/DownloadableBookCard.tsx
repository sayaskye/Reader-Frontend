import { useState, useEffect } from 'react';
import { useBookToLocal } from '@/features/library/hooks';
import { BookCard } from '@/features/library/components';
import type { UserBook } from '../types/book';

export const DownloadableBookCard = ({ ub }: { ub: UserBook }) => {
  const { loadBook, isBookDownloaded, isLoading, downloadProgress } =
    useBookToLocal();
  const [isLocal, setIsLocal] = useState<boolean>(true);

  useEffect(() => {
    isBookDownloaded(ub.bookId).then(setIsLocal);
  }, [ub.bookId, isBookDownloaded]);

  const handleDownload = async () => {
    const url = await loadBook({ ...ub.book });
    if (url) setIsLocal(true);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg">
      {!isLocal && (
        <div
          onClick={handleDownload}
          className="absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all hover:bg-black/50"
        >
          <div className="rounded-full border border-white/30 bg-white/20 p-3 backdrop-blur-md">
            <span className="text-sm font-semibold text-white">
              {isLoading ? `${downloadProgress}%` : 'DOWNLOAD'}
            </span>
          </div>
        </div>
      )}
      <BookCard userBook={ub} />
    </div>
  );
};

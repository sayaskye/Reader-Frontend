import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import {
  Sidebar,
  ImportBookModal,
  StickToTop,
} from '@/features/library/components';
import { useBookFilters, useGetBooks } from '@/features/library/hooks';
import { LibraryContent } from '@/features/library/components/LibraryContent';

import { api } from '@/api/axios';
import { booksKeys } from '@/lib/tanstack';

export const Library = () => {
  const filterControls = useBookFilters();
  const queryBooks = useGetBooks(filterControls.currentFilters);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpload = async (data: { file: File }) => {
    const formData = new FormData();
    formData.append('file', data.file);

    await api.post('/books', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    queryClient.invalidateQueries({ queryKey: booksKeys.all });
  };
  return (
    <div className="bg-background text-foreground flex min-h-screen">
      <Sidebar />
      <main className="bg-background flex h-screen flex-1 flex-col overflow-hidden">
        <StickToTop
          controls={filterControls}
          isFetching={queryBooks.isFetching}
          onImportClick={() => setIsImportModalOpen(true)}
        />
        <LibraryContent
          queryBooks={queryBooks}
          onResetFilters={filterControls.resetFilters}
        />
      </main>
      <ImportBookModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onUpload={handleUpload}
      />
      {/* <ReadingRightNow /> */}
    </div>
  );
};

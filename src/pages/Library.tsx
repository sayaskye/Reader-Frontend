import { useState } from 'react';

import {
  Sidebar,
  ImportBookModal,
  StickToTop,
} from '@/features/library/components';
import {
  useBookFilters,
  useGetBooks,
  useUploadBook,
} from '@/features/library/hooks';
import { LibraryContent } from '@/features/library/components/LibraryContent';

export const Library = () => {
  const filterControls = useBookFilters();
  const queryBooks = useGetBooks(filterControls.currentFilters);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const uploadBookMutation = useUploadBook();

  const handleUpload = async (data: { file: File }) => {
    const formData = new FormData();
    formData.append('file', data.file);
    await uploadBookMutation.mutateAsync(formData);
  };
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col md:flex-row">
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

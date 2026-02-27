import { useParams } from 'react-router-dom';
import { Aside } from '@/features/reader/components/Aside';
import { Content } from '@/features/reader/components/Content';
import { SideMenu } from '@/features/reader/components/SideMenu';
import { useReader } from '@/features/reader/hooks';

export const Reader = () => {
  const { id } = useParams<{ id: string }>();
  const {
    currentBookData,
    currentChapter,
    goToChapterByHref,
    totalChapters,
    epub,
  } = useReader(id);

  return (
    <div className="bg-parchment text-ink font-display selection:bg-primary/20 selection:text-ink overflow-hidden">
      <div className="relative flex h-screen w-full">
        <Aside
          epub={epub}
          currentBook={currentBookData}
          currentChapter={currentChapter}
          onJumpToChapter={goToChapterByHref}
          totalChapters={totalChapters}
        />
        <Content />
        <SideMenu />
      </div>
      {/* <SettingsModal /> */}
    </div>
  );
};

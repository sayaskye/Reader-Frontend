import { Aside } from '@/features/reader/components/Aside';
import { Content } from '@/features/reader/components/Content';
import { SideMenu } from '@/features/reader/components/SideMenu';
import { SettingsModal } from '../features/reader/components/SettingsModal';

export const Reader = () => {
  /* const initReader = async (bookId: string) => {
    const registration = await navigator.serviceWorker.register('/sw.js');
    if (registration.active) {
      registration.active.postMessage({ type: 'SET_BOOK', bookId });
    }
    const iframe = document.getElementById('reader-frame');
    //iframe.src = `/epub-content/OEBPS/ch01.html`;
  }; */

  return (
    <div className="bg-parchment text-ink font-display selection:bg-primary/20 selection:text-ink overflow-hidden">
      <div className="relative flex h-screen w-full">
        <Aside />
        <Content />
        <SideMenu />
      </div>
      {/* <SettingsModal /> */}
    </div>
  );
};

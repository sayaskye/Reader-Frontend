import { Aside } from '@/features/reader/components/Aside';
import { Content } from '@/features/reader/components/Content';
import { SideMenu } from '@/features/reader/components/SideMenu';
import { SettingsModal } from '../features/reader/components/SettingsModal';

export const Reader = () => {
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

import {
  ALargeSmall,
  Minus,
  Plus,
  UnfoldHorizontal,
  UnfoldVertical,
  X,
} from 'lucide-react';

export const SettingsModal = () => {
  return (
    <div className="bg-bg-main/20 fixed inset-0 z-40 flex items-center justify-center p-4 backdrop-blur-[2px]">
      <div className="glass-panel border-primary z-50 w-full max-w-lg overflow-hidden rounded-xl border">
        <div className="flex items-center justify-between border-b border-[#5D4037]/10 px-6 py-4">
          <h2 className="text-text-main text-lg font-semibold tracking-tight">
            Appearance Settings
          </h2>
          <button className="text-text-main cursor-pointer rounded-full p-2 transition-colors hover:bg-[#5D4037]/10">
            <X />
          </button>
        </div>
        <div className="space-y-8 p-6">
          <section>
            <label className="text-text-muted mb-3 block text-xs font-bold tracking-wider uppercase">
              Font Face
            </label>
            <div className="grid grid-cols-3 gap-2 rounded-lg bg-[#5D4037]/5 p-1">
              <button className="flex flex-col items-center rounded-md border border-[#5D4037]/20 bg-white py-3 text-[#5D4037] shadow-sm transition-all">
                <span className="font-serif text-xl">Aa</span>
                <span className="text-ssm mt-1 font-medium">Serif</span>
              </button>
              <button className="text-text-muted flex flex-col items-center rounded-md py-3 transition-all hover:bg-white/50">
                <span className="font-sans text-xl">Aa</span>
                <span className="text-ssm mt-1 font-medium">Sans</span>
              </button>
              <button className="text-text-muted flex flex-col items-center rounded-md py-3 transition-all hover:bg-white/50">
                <span className="font-mono text-xl">Aa</span>
                <span className="text-ssm mt-1 font-medium">Mono</span>
              </button>
            </div>
          </section>
          <section className="space-y-6">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <label className="text-text-muted text-xs font-bold tracking-wider uppercase">
                  Font Size
                </label>
                <span className="text-primary text-xs font-semibold">18px</span>
              </div>
              <div className="text-text-main flex items-center gap-4">
                <ALargeSmall />
                <input
                  className="custom-slider bg-bg-sidebar h-1.5 w-full cursor-pointer appearance-none rounded-full"
                  max="32"
                  min="12"
                  type="range"
                  value="18"
                />
                <ALargeSmall />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="text-text-muted mb-3 block text-xs font-bold tracking-wider uppercase">
                  Line Height
                </label>
                <div className="text-text-main flex items-center justify-between rounded-lg border border-[#5D4037]/10 bg-[#5D4037]/5 p-1">
                  <button className="rounded p-1 transition-colors hover:bg-[#5D4037]/10">
                    <Minus />
                  </button>
                  <span className="text-sm font-medium">1.6</span>
                  <button className="rounded p-1 transition-colors hover:bg-[#5D4037]/10">
                    <Plus />
                  </button>
                </div>
              </div>
              <div>
                <label className="text-text-muted mb-3 block text-xs font-bold tracking-wider uppercase">
                  Margins
                </label>
                <div className="text-text-main flex items-center justify-between rounded-lg border border-[#5D4037]/10 bg-[#5D4037]/5 p-1">
                  <button className="rounded p-1 transition-colors hover:bg-[#5D4037]/10">
                    <UnfoldVertical />
                  </button>
                  <span className="text-sm font-medium">Normal</span>
                  <button className="rounded p-1 transition-colors hover:bg-[#5D4037]/10">
                    <UnfoldHorizontal />
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <label className="text-text-muted mb-3 block text-xs font-bold tracking-wider uppercase">
              Theme
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex h-12 items-center justify-center overflow-hidden rounded-lg border border-transparent bg-[#111121] opacity-80 transition-all hover:border-slate-500 hover:opacity-100">
                <span className="text-xs font-bold text-white">Dark</span>
              </button>
              <button className="group relative flex h-12 items-center justify-center overflow-hidden rounded-lg border-2 border-[#5D4037] bg-[#F4ECD8] shadow-sm">
                <div className="absolute inset-0 h-full w-full bg-[#5D4037]/5"></div>
                <span className="relative z-10 text-xs font-bold text-[#5F4B32]">
                  Sepia
                </span>
                <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[#5D4037]"></div>
              </button>
              <button className="flex h-12 items-center justify-center overflow-hidden rounded-lg border border-gray-700 bg-black opacity-80 transition-all hover:border-gray-500 hover:opacity-100">
                <span className="text-xs font-bold text-white">Contrast</span>
              </button>
            </div>
          </section>
        </div>
        <div className="flex items-center justify-between border-t border-[#5D4037]/10 bg-[#5D4037]/5 p-6">
          <button className="text-text-muted text-sm font-medium transition-colors hover:text-[#3E2723]">
            Reset Defaults
          </button>
          <div className="flex gap-3">
            <button className="rounded-lg border border-transparent bg-[#5D4037] px-6 py-2 font-semibold text-[#F8F5F2] shadow-md shadow-[#5D4037]/20 transition-all hover:bg-[#4E342E]">
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

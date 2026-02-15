export const LibraryContent = () => {
  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Your Library
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            248 books in total • 12 currently being read
          </p>
        </div>
        <div className="flex rounded-lg bg-slate-200 p-1 dark:bg-slate-800/50">
          <button className="text-primary rounded-md bg-white p-2 shadow-sm dark:bg-slate-700">
            <span className="material-icons-round text-sm">grid_view</span>
          </button>
          <button className="p-2 text-slate-400 transition-colors hover:text-slate-200">
            <span className="material-icons-round text-sm">
              format_list_bulleted
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <div className="group hover:border-primary/50 relative transform cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-800/40">
          <div className="relative aspect-[3/4.5] overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              data-alt="Modern minimalist book cover titled The Art of Code"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsYg1KOME5Edn5X5avghibtqqFH2NQNF__sSqamymZSmRci8-6LoxBGmzbA8GzpllItoHMdq8Pz13XXD4-Mq9fkpx-nPAagMVKXnWbyZK5z2jOB3gvoR4BDVXmjNT9-1WSrcKNtk2nS-hm-u0q5ofWbeyVax43Ys_Aa1rL2nf7G0KAnq9dltreljjt5ffoWqFuHwTneGEQj-vrVa65MT4rP5GWhR3_4jWdePfxCQBy9SNLA74VogQmI6Yc6K03E2KEXyowc1R5v50q"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <button className="bg-primary flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-bold text-white">
                <span className="material-icons-round text-sm">play_arrow</span>
                Continue
              </button>
            </div>
            <button className="text-primary absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-md">
              <span className="material-icons-round text-sm">star</span>
            </button>
            <div className="absolute top-3 left-3">
              <span className="bg-primary rounded px-2 py-1 text-[10px] font-black tracking-wider text-white uppercase">
                Reading
              </span>
            </div>
          </div>
          <div className="space-y-1 p-4">
            <h3 className="line-clamp-1 text-sm font-bold text-slate-900 dark:text-white">
              The Great Beyond
            </h3>
            <p className="text-xs font-medium text-slate-500">
              Eleanor P. Vance
            </p>
            <div className="mt-3 flex items-center justify-between text-[10px] font-semibold tracking-tight text-slate-400 uppercase">
              <span>Last read: 2h ago</span>
              <span className="text-primary">64%</span>
            </div>
          </div>
          <div className="h-1 w-full overflow-hidden bg-slate-200 dark:bg-slate-700/50">
            <div className="bg-primary h-full"></div>
          </div>
        </div>

        <div className="group hover:border-primary/50 relative transform cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-800/40">
          <div className="relative aspect-[3/4.5] overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              data-alt="ClassNameic fiction book cover on wooden background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOur20fbLFl21Iy0bK9JVnzvn4NzYv6vG7uwqkMgl0CFof9DagpX_1PIXR_HxS2SdXax9WIpI0HOPUQzdsDY5gmvE0xJaxFa5xt1YYesnanW3VZt7i3v8ug11B1y7xqSj2W7tN_W8f5GNPEKcIv6sslG9pqGeuEcDfb-DL5TCQyMAFDqDCOAqp9ED-RlME4jnw1Bcq5tJM3J2jWNMTAxm7pLz5yLI3KpKJO-CZYQVwajDd8jIG794bNJCu__Pi5BFOUuGdQXRAg5cG"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <button className="bg-primary flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-bold text-white">
                <span className="material-icons-round text-sm">menu_book</span>
                Read Again
              </button>
            </div>
            <button className="hover:text-primary absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-slate-300 backdrop-blur-md transition-colors">
              <span className="material-icons-round text-sm">star_outline</span>
            </button>
            <div className="absolute top-3 left-3">
              <span className="rounded bg-emerald-500 px-2 py-1 text-[10px] font-black tracking-wider text-white uppercase">
                Finished
              </span>
            </div>
          </div>
          <div className="space-y-1 p-4">
            <h3 className="line-clamp-1 text-sm font-bold text-slate-900 dark:text-white">
              Midnight Circuits
            </h3>
            <p className="text-xs font-medium text-slate-500">Julian Thorne</p>
            <div className="mt-3 flex items-center justify-between text-[10px] font-semibold tracking-tight text-slate-400 uppercase">
              <span>Read on Oct 12</span>
              <span className="text-emerald-500">100%</span>
            </div>
          </div>
          <div className="h-1 w-full overflow-hidden bg-slate-200 dark:bg-slate-700/50">
            <div className="h-full bg-emerald-500"></div>
          </div>
        </div>

        <div className="group hover:border-primary/50 relative transform cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-800/40">
          <div className="relative aspect-[3/4.5] overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              data-alt="Abstract blue and white book cover design"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFxMls5YQ8T46M0GZCsXL-5mplD0C4lu9BhDDHo5wd7_OhUM8Ov6G4Xkpa0DZmVl1oEmWU4JN8VTw3QjRF-SVJU79QuqqV14Lqx_Ofj6NWf24veXh0Qwxk5qbboaXiRzVB4a83mMng7enazYLmX1rhVS9JKQv7LOpPl6dI0h_-my0rgRdaDXj1Lhf6nhYrX8hBLJS1IZ6uRGT-MORMdodSm_ZVWvrNQ56gZ_fYEVeBix-HDkP2fut7NcizM1nQ1M4d5OToEBkzM_pi"
            />
            <button className="text-primary absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-md">
              <span className="material-icons-round text-sm">star</span>
            </button>
            <div className="absolute top-3 left-3">
              <span className="bg-primary rounded px-2 py-1 text-[10px] font-black tracking-wider text-white uppercase">
                Reading
              </span>
            </div>
          </div>
          <div className="space-y-1 p-4">
            <h3 className="line-clamp-1 text-sm font-bold text-slate-900 dark:text-white">
              Data Architectures
            </h3>
            <p className="text-xs font-medium text-slate-500">Sarah Jenkins</p>
            <div className="mt-3 flex items-center justify-between text-[10px] font-semibold tracking-tight text-slate-400 uppercase">
              <span>Last read: 1d ago</span>
              <span className="text-primary">12%</span>
            </div>
          </div>
          <div className="h-1 w-full overflow-hidden bg-slate-200 dark:bg-slate-700/50">
            <div className="bg-primary h-full"></div>
          </div>
        </div>

        <div className="group hover:border-primary/50 relative transform cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-800/40">
          <div className="relative aspect-[3/4.5] overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              data-alt="Vintage book cover with golden ornaments"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCii3fwdpgTrC05NwQxzw1wji4lOmmPhkqotxHUPGiPcf2BGAIm47wRhZBBObaqCE3_TdKgDOrWwVy6ok7oJZYnIoJFF86g87imI3DGVqJj5FQsaPM5BtZnZ8Lz14p6aOBIDUyvohUX01OLhJVSw79wA_9qWYGA7PradP2IQondlr8uPdTvBSoDIFqDPFjdLmNt5mCwFH1fAZ2V4GxnA9eDg6RxPkjzl_-gD8_mQZSDqA7M1VWHgc6YX1gN1V1MMAHwMWqiKFvjZu6h"
            />
            <button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-slate-300 backdrop-blur-md">
              <span className="material-icons-round text-sm">star_outline</span>
            </button>
            <div className="absolute top-3 left-3">
              <span className="rounded bg-slate-500 px-2 py-1 text-[10px] font-black tracking-wider text-white uppercase">
                To Read
              </span>
            </div>
          </div>
          <div className="space-y-1 p-4">
            <h3 className="line-clamp-1 text-sm font-bold text-slate-900 dark:text-white">
              Echoes of Time
            </h3>
            <p className="text-xs font-medium text-slate-500">Marcus Aurel</p>
            <div className="mt-3 flex items-center justify-between text-[10px] font-semibold tracking-tight text-slate-400 uppercase">
              <span>Added: 3d ago</span>
              <span className="text-slate-500">0%</span>
            </div>
          </div>
          <div className="h-1 w-full overflow-hidden bg-slate-200 dark:bg-slate-700/50">
            <div className="bg-primary h-full w-0"></div>
          </div>
        </div>

        <div className="group hover:border-primary/50 relative transform cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-800/40">
          <div className="relative aspect-[3/4.5] overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              data-alt="Typography based book cover design for science fiction"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjEIEgBgZuHUDhm6MxidOxW8_VQJZdXfC15-N4w3dUD6KgWWn5_51PDcmah03CUQ-SOoT3qrKeNaicg_8BtW5vymeyzpoQW_MT0l7oaY28IRuWCM7Ti2uBr3GcoAMiNeNoenC8jw9HX4hOFl15n_VVUY9BuBPJ9ABUG46FyPtfLsQ48949zNghnCUsmQW1ZrCkuWpZpUVHB8McUyGfNATqnVbV21_oh--EBzbg3pXf9Q5DaguvUe3r0A3cdlCPSCpjAQ6n5Q3nQhuk"
            />
            <button className="text-primary absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-md">
              <span className="material-icons-round text-sm">star</span>
            </button>
            <div className="absolute top-3 left-3">
              <span className="bg-primary rounded px-2 py-1 text-[10px] font-black tracking-wider text-white uppercase">
                Reading
              </span>
            </div>
          </div>
          <div className="space-y-1 p-4">
            <h3 className="line-clamp-1 text-sm font-bold text-slate-900 dark:text-white">
              Future Theory
            </h3>
            <p className="text-xs font-medium text-slate-500">Liam Hudson</p>
            <div className="mt-3 flex items-center justify-between text-[10px] font-semibold tracking-tight text-slate-400 uppercase">
              <span>Last read: 4h ago</span>
              <span className="text-primary">89%</span>
            </div>
          </div>
          <div className="h-1 w-full overflow-hidden bg-slate-200 dark:bg-slate-700/50">
            <div className="bg-primary h-full"></div>
          </div>
        </div>

        <div className="group hover:border-primary/50 relative transform cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-800/40">
          <div className="relative aspect-[3/4.5] overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              data-alt="Stack of books on a dark background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqTL5NAbKxpIsyT12xIpYIO52DhjIqRS9BvVu0IM-ZRcZYTgE5JuNKCRCaKzR8tmWTef8no0pS4gRTBjeIR2Td-HGH3lDh5jLpYDxmk52xZmVcuC-JcmTKN_u210PnMGUsnUPMKRCFDsQeF40uKVc7-GiTWl4Kmdz3S1CjI-l2Upphzg9ERDJy14r5vnmvz8EXGBdDlry0fQx3Ym7bdj9tieEwDHR3k3NxmKIvzwDp5MLYrvlAWrapG87OpU5UDncCQ4Zml_ZIVr0n"
            />
            <button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-slate-300 backdrop-blur-md">
              <span className="material-icons-round text-sm">star_outline</span>
            </button>
            <div className="absolute top-3 left-3">
              <span className="rounded bg-emerald-500 px-2 py-1 text-[10px] font-black tracking-wider text-white uppercase">
                Finished
              </span>
            </div>
          </div>
          <div className="space-y-1 p-4">
            <h3 className="line-clamp-1 text-sm font-bold text-slate-900 dark:text-white">
              The Silent Pulse
            </h3>
            <p className="text-xs font-medium text-slate-500">Emily Chen</p>
            <div className="mt-3 flex items-center justify-between text-[10px] font-semibold tracking-tight text-slate-400 uppercase">
              <span>Read on Sep 29</span>
              <span className="text-emerald-500">100%</span>
            </div>
          </div>
          <div className="h-1 w-full overflow-hidden bg-slate-200 dark:bg-slate-700/50">
            <div className="h-full bg-emerald-500"></div>
          </div>
        </div>

        <div className="group hover:border-primary/50 relative transform cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-800/40">
          <div className="relative aspect-[3/4.5] overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              data-alt="Close up of book pages with focus on text"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9kDbFRA0qkKKqE9p4cRJk4s5JBSL6qeoWhflOCkUxKRQS0j3sNei_YLniJVINwYTWHJ4Jj4Kvy_PGAv5EbDyuYznbPRVxPWDvACvB2mtlGIytId4joQMZrq6_GO1eT55tU5U0qLzo58NveHKbj0OyNjHFTRhwk5kzrrIpWgUwUI43FNWetSRT15Bng07A-QN8QGdTL4S1Rr2ul2hAkyBqYLGZoRUj5JpUTwFuBQu_7aIwGVeboTgKKeX-v8lXTtPqoQv-IZlnufQd"
            />
            <div className="absolute top-3 left-3">
              <span className="rounded bg-slate-500 px-2 py-1 text-[10px] font-black tracking-wider text-white uppercase">
                To Read
              </span>
            </div>
          </div>
          <div className="space-y-1 p-4">
            <h3 className="line-clamp-1 text-sm font-bold text-slate-900 dark:text-white">
              Narrative Structures
            </h3>
            <p className="text-xs font-medium text-slate-500">B.R. Brooks</p>
            <div className="mt-3 flex items-center justify-between text-[10px] font-semibold tracking-tight text-slate-400 uppercase">
              <span>Added: 1w ago</span>
              <span className="text-slate-500">0%</span>
            </div>
          </div>
          <div className="h-1 w-full overflow-hidden bg-slate-200 dark:bg-slate-700/50">
            <div className="bg-primary h-full w-0"></div>
          </div>
        </div>

        <div className="group hover:border-primary/50 relative transform cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-800/40">
          <div className="relative aspect-[3/4.5] overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              data-alt="Artistic cover showing a mountain silhouette"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyYEemEJrqaLcpjdXk-kJcPWIX-E53EUP07IgrEo3EG7dYxxdU1qrOu2uFpH2Miot8NNMnNFI3rVhNr7g5V0Zbs_tw5wZKSXPBbY05aZY0Gh0kaiO_9dEzNdu7zBhXtKgFXbPA6Y6i4Ac0knH1rn_80J1z4lRKhMoYbL2_e5ESkAjvD3c_BIOAGgyS7-pj8bQajBMIPxQRMkROBtkg6pxymirQvDqJpmLQ3wlpZsLiMRwDr5M2V73zZVOKVmvdh8gCYeTyOrwSmNqo"
            />
            <button className="text-primary absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-md">
              <span className="material-icons-round text-sm">star</span>
            </button>
            <div className="absolute top-3 left-3">
              <span className="bg-primary rounded px-2 py-1 text-[10px] font-black tracking-wider text-white uppercase">
                Reading
              </span>
            </div>
          </div>
          <div className="space-y-1 p-4">
            <h3 className="line-clamp-1 text-sm font-bold text-slate-900 dark:text-white">
              Mountain Peak
            </h3>
            <p className="text-xs font-medium text-slate-500">Simon Crest</p>
            <div className="mt-3 flex items-center justify-between text-[10px] font-semibold tracking-tight text-slate-400 uppercase">
              <span>Last read: 12m ago</span>
              <span className="text-primary">42%</span>
            </div>
          </div>
          <div className="h-1 w-full overflow-hidden bg-slate-200 dark:bg-slate-700/50">
            <div className="bg-primary h-full"></div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center pb-8">
        <button className="border-primary/10 rounded-xl border bg-slate-200 px-8 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
          Load More Titles
        </button>
      </div>
    </div>
  );
};

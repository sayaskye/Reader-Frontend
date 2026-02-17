import { Bookmark, Library } from 'lucide-react';
import { useNavigate } from 'react-router';

export const Aside = () => {
  const navigate = useNavigate();
  return (
    <aside className="bg-bg-sidebar border-card-bg z-20 flex h-full w-72 flex-col border-r shadow-xl shadow-black/10">
      <div className="border-card-bg border-b p-6">
        <div className="mb-6 flex items-center gap-3">
          <div
            className="bg-primary text-bg-main flex h-8 w-8 items-center justify-center rounded-lg shadow-sm"
            onClick={() => navigate('/library')}
          >
            <Library strokeWidth={2} size={30} />
          </div>
          <h1 className="text-text-main text-sm font-bold tracking-tight uppercase opacity-80">
            Library Navigator
          </h1>
        </div>
        <div className="space-y-1">
          <div className="text-text-muted mb-3 text-xs font-semibold tracking-widest uppercase">
            Book Details
          </div>
          <div className="group flex cursor-pointer gap-3">
            <div className="relative">
              <img
                className="h-24 w-16 rounded object-cover shadow-md transition-transform duration-300 group-hover:-translate-y-1"
                data-alt="ClassNameic book cover design with gold accents"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_QmWJJO02E61EwwOvY78iTI5GjMRHo99Jey_Cvg7cGijjjxgSv_LBOuVXNejO-PG8SlYWocDOYBNc7xcpjK4C9vGs_Ec5gA3IfWRHhUGOP7u8vu8t3Wv9QCgwVnAsGkdsQOelHnUq2EjRFBACTeaLoDl0JFarrfhkuGuCCmHMsm3cQNOAhGr3tYlw-ZAsxQ0BNUGKIhRBU3-fzZxp2U_CodDo9vs-kvTLt8LDgE7XWcjyGMnLREb2MjUfIEgKt6Jw8uDlUhAJpLdI"
              />
              <div className="absolute inset-0 rounded ring-1 ring-black/10 ring-inset"></div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-text-main font-serif text-sm leading-tight font-bold">
                The Midnight Horizon
              </span>
              <span className="text-text-muted mt-1 text-xs">
                Elena V. Sterling
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="custom-scrollbar flex-1 overflow-y-auto p-4">
        <div className="mb-6">
          <span className="text-text-muted text-ssm tracking-widest-plus px-2 font-bold uppercase">
            Chapters
          </span>
          <ul className="mt-3 space-y-1">
            <li>
              <a
                className="text-text-muted hover:bg-primary/10 hover:text-text-muted flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors"
                href="#"
              >
                <span className="text-ssm w-4 font-serif opacity-60">01</span>
                <span className="font-medium">Prelude to Shadows</span>
              </a>
            </li>
            <li>
              <a
                className="text-text-muted border-primary bg-card-bg/40 flex items-center gap-3 rounded-lg border-l-[3px] px-3 py-2 text-sm font-bold shadow-sm"
                href="#"
              >
                <span className="text-ssm w-4 font-serif opacity-80">02</span>
                <span>The Silent Observatory</span>
              </a>
            </li>
            <li>
              <a
                className="text-text-muted hover:bg-primary/10 hover:text-text-muted flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors"
                href="#"
              >
                <span className="text-ssm w-4 font-serif opacity-60">03</span>
                <span className="font-medium">Echoes of the Void</span>
              </a>
            </li>
            <li>
              <a
                className="text-text-muted hover:bg-primary/10 hover:text-text-muted flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors"
                href="#"
              >
                <span className="text-ssm w-4 font-serif opacity-60">04</span>
                <span className="font-medium">The Glass Cartographer</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-text-muted text-ssm tracking-widest-plus px-2 font-bold uppercase">
            Bookmarks
          </span>
          <div className="mt-3 space-y-2">
            <div className="group hover:border-primary/40 border-card-bg bg-card-bg/40 hover:bg-card-bg/60 cursor-pointer rounded-lg border p-3 shadow-sm transition-all">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-text-muted text-ssm font-bold">
                  Page 142
                </span>
                <span className="text-primary">
                  <Bookmark size={14} />
                </span>
              </div>
              <p className="text-text-muted/80 line-clamp-2 font-serif text-xs leading-relaxed italic">
                "The stars didn't just shine; they hummed a melody only the lost
                could hear..."
              </p>
            </div>
          </div>
        </div>
      </nav>
      <div className="border-card-bg bg-bg-main border-t p-4">
        <div className="mb-2 flex items-center justify-between text-[11px] font-bold">
          <span className="text-text-muted">READING PROGRESS</span>
          <span className="text-text-muted">42%</span>
        </div>
        <div className="bg-bgborder-card-bg h-1.5 w-full overflow-hidden rounded-full">
          <div className="bg-primary h-full w-[42%] shadow-[0_0_10px_rgba(139,94,60,0.5)]"></div>
        </div>
      </div>
    </aside>
  );
};

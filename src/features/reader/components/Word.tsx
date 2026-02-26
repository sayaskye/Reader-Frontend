import { Ellipsis, Volume2 } from 'lucide-react';

export const Word = () => {
  return (
    <div className="relative">
      <div className="bg-card border-primary/50 absolute -top-4 left-1/2 z-50 w-80 -translate-x-1/2 -translate-y-full rounded-xl border p-5 shadow-sm">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h3 className="text-primary font-serif text-xl leading-none font-bold">
              ephemeral
            </h3>
            <p className="text-primary font-display mt-1 text-sm font-semibold italic">
              /əˈfem(ə)rəl/
            </p>
          </div>
          <button className="bg-primary/10 text-primary hover:bg-primary/20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors">
            <Volume2 />
          </button>
        </div>
        <div className="space-y-3">
          <p className="text-foreground font-display text-sm leading-relaxed">
            <span className="text-primary text-ssm mr-1 font-bold uppercase">
              adjective:
            </span>
            Lasting for a very short time; fleeting or transitory.
          </p>
          <div className="bg-muted text-primary border-foreground rounded-lg border p-3 font-serif text-sm italic">
            "The beauty of the aurora was ephemeral, vanishing as quickly as it
            had arrived."
          </div>
        </div>
        <div className="font-display border-foreground mt-4 flex gap-2 border-t pt-4">
          <button className="bg-primary text-primary-foreground hover:bg-accent text-ssm flex-1 cursor-pointer rounded py-2 font-bold tracking-wider uppercase shadow-sm transition-colors">
            Save Word
          </button>
          <button className="text-primary hover:text-foreground border-foreground hover:bg-foreground cursor-pointer rounded border px-3 transition-colors">
            <Ellipsis />
          </button>
        </div>
        <div className="border-t-primary/50 absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 translate-y-full border-10 border-b-0 border-r-transparent border-l-transparent drop-shadow-sm filter"></div>
      </div>
    </div>
  );
};

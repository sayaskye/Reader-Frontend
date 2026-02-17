import { Library, Quote } from 'lucide-react';

export const AsideForm = () => {
  return (
    <section className="paper-texture border-primary/10 relative hidden flex-col justify-between overflow-hidden border-r p-12 lg:flex lg:w-5/12 xl:w-1/2">
      <div className="bg-primary/10 absolute -top-24 -left-24 h-96 w-96 rounded-full blur-[100px]"></div>
      <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-yellow-600/5 blur-[80px]"></div>
      <div className="relative z-10">
        <div className="group flex cursor-default items-center gap-2">
          <div className="bg-primary text-bg-main shadow-primary/20 flex h-10 w-10 items-center justify-center rounded-lg shadow-lg">
            <Library strokeWidth={3} size={40} />
          </div>
          <span className="text-text-main text-2xl font-bold tracking-tight">
            Lumina<span className="text-primary font-serif italic">Reader</span>
          </span>
        </div>
      </div>
      <div className="relative z-10 max-w-lg">
        <div className="mb-6">
          <Quote />
        </div>
        <h1 className="text-text-main mb-8 font-serif text-4xl leading-tight font-medium italic xl:text-5xl">
          "A reader lives a thousand lives before he dies. The man who never
          reads lives only one."
        </h1>
        <div className="flex items-center gap-4">
          <div className="bg-primary/40 h-px w-12"></div>
          <p className="text-text-muted font-sans text-lg font-medium tracking-wide uppercase">
            George R.R. Martin
          </p>
        </div>
      </div>
      <div className="relative z-10">
        <p className="text-text-muted text-sm font-medium tracking-wide">
          © 2024 Lumina Systems. All rights reserved.
        </p>
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 mix-blend-multiply">
        <img
          className="h-full w-full object-cover grayscale sepia-[.3]"
          data-alt="Sunlit cozy library nook"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZvzciGrlfaeR7Er3IQzLylNjGdWNpyyqmzZWuOtwbU686Ol3vPU77Bkbsq2Mht8gCHMdJNQ8Qi5AV_kpJb0SzvZog-jAK8AWDvXkHEnA_sJ1qltYpIf9rjesJxQaSlccLP1NLWWPsmNamezvK_i4PrP-WF1MFJgcBRgJ6daS7B44YFs8aWQ7gTAvxezBzuoeu5Wh026zdzqs_UcrGGOk3RB343TuQUCxN0W3U5Xs069sJ9wVf9IrDO9jXspJuTizDr33DJQlexnAq"
        />
      </div>
    </section>
  );
};

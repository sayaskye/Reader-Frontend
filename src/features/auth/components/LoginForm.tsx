import {
  ArrowRight,
  AtSign,
  Eye,
  EyeClosed,
  Library,
  Lock,
} from 'lucide-react';

export const LoginForm = () => {
  return (
    <main className="bg-background flex flex-1 flex-col items-center justify-center p-6 lg:p-12 xl:p-24">
      <div className="w-full max-w-md space-y-8">
        <div className="mb-8 flex justify-center lg:hidden">
          <div className="flex items-center gap-2">
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg shadow-lg">
              <span className="text-sm text-white">
                <Library strokeWidth={3} size={40} />
              </span>
            </div>
            <span className="text-foreground text-xl font-bold tracking-tight">
              LuminaReader
            </span>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-foreground mb-2 font-serif text-3xl font-bold">
            Welcome Back
          </h2>
          <p className="text-foreground">
            Enter your credentials to access your library.
          </p>
        </div>
        <div className="bg-card border-primary/5 flex rounded-lg border p-1">
          <button className="shadow-primary/5 text-primary bg-primary/20 flex-1 rounded-md py-2.5 text-sm font-semibold shadow-sm ring-1 ring-black/5 transition-all">
            Sign In
          </button>
          <button className="text-secondary-foreground hover:bg-secondary/20 flex-1 rounded-md py-2.5 text-sm font-semibold transition-all">
            Register
          </button>
        </div>
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault;
          }}
        >
          <div className="space-y-1">
            <label
              className="text-primary ml-1 block text-xs font-bold tracking-widest uppercase"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="group relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <span className="group-focus-within:text-primary text-lg text-stone-400 transition-colors">
                  <AtSign />
                </span>
              </div>
              <input
                className="focus:ring-primary/20 focus:border-primary text-primary bg-primary/20 block w-full rounded-xl border py-3.5 pr-4 pl-11 shadow-sm transition-all outline-none placeholder:text-stone-400 focus:ring-2"
                id="email"
                placeholder="name@example.com"
                type="email"
              />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between px-1">
              <label
                className="text-primary block text-xs font-bold tracking-widest uppercase"
                htmlFor="password"
              >
                Password
              </label>
              <a
                className="text-primary hover:text-primary text-xs font-bold tracking-widest uppercase transition-colors"
                href="#"
              >
                Forgot?
              </a>
            </div>
            <div className="group relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <span className="group-focus-within:text-primary text-lg text-stone-400 transition-colors">
                  <Lock />
                </span>
              </div>
              <input
                className="focus:ring-primary/20 focus:border-primary text-primary bg-primary/20 block w-full rounded-xl border py-3.5 pr-4 pl-11 shadow-sm transition-all outline-none placeholder:text-stone-400 focus:ring-2"
                id="password"
                placeholder="••••••••"
                type="password"
              />
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-stone-400 hover:text-stone-600"
                type="button"
              >
                <Eye />
                <EyeClosed />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2 px-1">
            <input
              className="text-primary focus:ring-primary h-4 w-4 rounded border-stone-300 bg-white"
              id="remember"
              type="checkbox"
            />
            <label
              className="text-foreground hover:text-primary cursor-pointer text-sm transition-colors"
              htmlFor="remember"
            >
              Stay signed in for 30 days
            </label>
          </div>
          <button
            className="bg-primary hover:bg-accent text-primary-foreground flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold shadow-lg transition-all active:scale-95"
            type="submit"
          >
            <span>Sign In</span>
            <ArrowRight size={18} />
          </button>
        </form>
        <p className="text-foreground text-center text-sm">
          New to the library?
          <a
            className="text-primary hover:text-primary ml-1 font-bold underline-offset-4 hover:underline"
            href="#"
          >
            Create an account
          </a>
        </p>
      </div>
    </main>
  );
};

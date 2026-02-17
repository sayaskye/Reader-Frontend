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
    <main className="bg-background-light flex flex-1 flex-col items-center justify-center p-6 lg:p-12 xl:p-24">
      <div className="w-full max-w-md space-y-8">
        <div className="mb-8 flex justify-center lg:hidden">
          <div className="flex items-center gap-2">
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg shadow-lg">
              <span className="material-icons text-sm text-white">
                <Library strokeWidth={3} size={40} />
              </span>
            </div>
            <span className="text-text-main text-xl font-bold tracking-tight">
              LuminaReader
            </span>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-text-main mb-2 font-serif text-3xl font-bold">
            Welcome Back
          </h2>
          <p className="text-text-muted">
            Enter your credentials to access your library.
          </p>
        </div>
        <div className="bg-bg-sidebar border-primary/5 flex rounded-lg border p-1">
          <button className="shadow-primary/5 text-primary flex-1 rounded-md bg-white py-2.5 text-sm font-semibold shadow-sm ring-1 ring-black/5 transition-all">
            Sign In
          </button>
          <button className="text-text-muted hover:text-primary flex-1 rounded-md py-2.5 text-sm font-semibold transition-all hover:bg-white/50">
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
              className="text-text-muted ml-1 block text-xs font-bold tracking-widest uppercase"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="group relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <span className="material-icons group-focus-within:text-primary text-lg text-stone-400 transition-colors">
                  <AtSign />
                </span>
              </div>
              <input
                className="focus:ring-primary/20 focus:border-primary text-text-main block w-full rounded-xl border border-stone-200 bg-white py-3.5 pr-4 pl-11 shadow-sm transition-all outline-none placeholder:text-stone-400 focus:ring-2"
                id="email"
                placeholder="name@example.com"
                type="email"
              />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between px-1">
              <label
                className="text-text-muted block text-xs font-bold tracking-widest uppercase"
                htmlFor="password"
              >
                Password
              </label>
              <a
                className="text-primary hover:text-primary-dark text-xs font-bold tracking-widest uppercase transition-colors"
                href="#"
              >
                Forgot?
              </a>
            </div>
            <div className="group relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <span className="material-icons group-focus-within:text-primary text-lg text-stone-400 transition-colors">
                  <Lock />
                </span>
              </div>
              <input
                className="focus:ring-primary/20 focus:border-primary text-text-main block w-full rounded-xl border border-stone-200 bg-white py-3.5 pr-12 pl-11 shadow-sm transition-all outline-none placeholder:text-stone-400 focus:ring-2"
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
              className="text-text-muted hover:text-primary cursor-pointer text-sm transition-colors"
              htmlFor="remember"
            >
              Stay signed in for 30 days
            </label>
          </div>
          <button
            className="bg-primary shadow-primary/20 hover:shadow-primary/30 hover:bg-primary-dark flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold text-white shadow-lg transition-all active:scale-[0.98]"
            type="submit"
          >
            <span>Sign In</span>
            <ArrowRight size={18} />
          </button>
        </form>
        {/* <div className="relative flex items-center py-4">
          <div className="grow border-t border-stone-200"></div>
          <span className="mx-4 shrink text-xs font-bold tracking-widest text-stone-400 uppercase">
            Or continue with
          </span>
          <div className="grow border-t border-stone-200"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="hover:bg-background-alt hover:border-primary/30 flex items-center justify-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-sm transition-colors">
            <img
              alt=""
              className="h-5 w-5"
              data-alt="Google logo icon"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFCpVBZtcijG189ZH9BRHwe3aBGB5n-O1oD02rX7Oi7v2rR4hEiW21f2uWijQU7FoFzwjDrmzrPsXfZ6VjjsXLTmBTWueRTw2Vc4cvh17tyNMq_7COViLP_3mZ0oIDIrWY-dU8yt4DSNSgURVeR_q30F5VL5q7IvC4ICnMUDHGRmCoq6mcK4beVqnlb-8tdbqwqBBbCWBD_kj4VfrvnhXQU_F71cH7hVZPMBZXUpBKdOXAszhvgL47yxmy6Y_RR0ZAkYF3LR6yBIyD"
            />
            <span className="text-text-main text-sm font-semibold">Google</span>
          </button>
          <button className="hover:bg-background-alt hover:border-primary/30 flex items-center justify-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-sm transition-colors">
            <img
              alt=""
              className="h-5 w-5"
              data-alt="Apple logo icon"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzhmVn6yYFzDcugk7IIpUJxbZqpmfaVokQh01tFtxPY2rZ0SIgibdNztorND9-gDegQtOGKuiCmjQ2FSOhrGjXRPz6Z2Kgyw1Tf-HkcTbnpY-0Btkwz2ULit6oWxFJFW-pDFGUC3kMq_Iymtnj_ZM6xaYFE2F3GNga9gARPQtHepHW_obkNOe3pf5KARuM9K7OP2xkBB7U9aXA3aW1mnKkRMV6Qs0GE1lw9DKwxZYtT1_gP9XWazoH1a239_dxj2vO_Egtsf8Tx40F"
            />
            <span className="text-text-main text-sm font-semibold">Apple</span>
          </button>
        </div> */}
        <p className="text-text-muted text-center text-sm">
          New to the library?
          <a
            className="text-primary hover:text-primary-dark ml-1 font-bold underline-offset-4 hover:underline"
            href="#"
          >
            Create an account
          </a>
        </p>
      </div>
    </main>
  );
};

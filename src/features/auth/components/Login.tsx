import { Library } from 'lucide-react';
import LoginForm from './LogInForm';

export const Login = () => {
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
        <LoginForm />
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

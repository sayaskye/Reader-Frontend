import RegisterForm from './RegisterForm';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-background flex flex-1 flex-col items-center justify-center p-6 lg:p-12 xl:p-24">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center lg:text-left">
          <h2 className="text-foreground mb-2 font-serif text-3xl font-bold">
            Welcome
          </h2>
          <p className="text-foreground">
            Enter your credentials to create an account.
          </p>
        </div>
        <div className="bg-card border-primary/5 flex rounded-lg border p-1">
          <button
            className="text-secondary-foreground hover:bg-secondary/20 flex-1 cursor-pointer rounded-md py-2.5 text-sm font-semibold transition-all"
            onClick={() => navigate('/login')}
          >
            Sign In
          </button>
          <button className="shadow-primary/5 text-primary bg-primary/20 flex-1 rounded-md py-2.5 text-sm font-semibold shadow-sm ring-1 ring-black/5 transition-all">
            Register
          </button>
        </div>
        <RegisterForm />
        <p className="text-foreground text-center text-sm">
          Already have an account?
          <button
            className="text-primary hover:text-primary ml-1 cursor-pointer font-bold underline-offset-4 hover:underline"
            onClick={() => navigate('/login')}
          >
            Sing in
          </button>
        </p>
      </div>
    </main>
  );
};

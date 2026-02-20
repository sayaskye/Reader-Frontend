import { AsideForm } from '@/features/auth/components/AsideForm';
import { LoginForm } from '@/features/auth/components/LoginForm';

export const Login = () => {
  return (
    <div className="bg-background text-foreground font-display selection:bg-primary/20 selection:text-primary min-h-screen antialiased">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <AsideForm />
        <LoginForm />
      </div>
    </div>
  );
};

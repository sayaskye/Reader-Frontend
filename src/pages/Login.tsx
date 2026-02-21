import { AsideSection } from '@/features/auth/components/AsideSection';
import { Login as LoginForm } from '@/features/auth/components/Login';

export const Login = () => {
  return (
    <div className="bg-background text-foreground font-display selection:bg-primary/20 selection:text-primary min-h-screen antialiased">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <AsideSection />
        <LoginForm />
      </div>
    </div>
  );
};

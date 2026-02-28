import { AsideSection } from '@/features/auth/components/AsideSection';
import { Register as RegisterForm } from '@/features/auth/components';

export const Register = () => {
  return (
    <div className="bg-background text-foreground font-display selection:bg-primary/20 selection:text-primary min-h-screen antialiased">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <AsideSection />
        <RegisterForm />
      </div>
    </div>
  );
};

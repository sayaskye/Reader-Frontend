import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AtSign, Lock, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';

import { loginSchema, type LoginFormValues } from '@/schemas';
import { useLogin } from '@/features/auth/hooks';

export default function LoginForm() {
  const loginMutation = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate(data);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
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
              <AtSign size={18} />
            </span>
          </div>
          <input
            {...register('email')}
            className={`focus:ring-primary/20 focus:border-primary text-primary bg-primary/20 block w-full rounded-xl border py-3.5 pr-4 pl-11 shadow-sm transition-all outline-none placeholder:text-stone-400 focus:ring-2 ${
              formState.errors.email ? 'border-red-500' : 'border-transparent'
            }`}
            id="email"
            placeholder="name@example.com"
            type="email"
          />
        </div>
        {formState.errors.email && (
          <p className="text-ssm ml-1 font-bold tracking-tighter text-red-500 uppercase">
            {formState.errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-1">
        <div className="flex items-center justify-between px-1">
          <label
            className="text-primary block text-xs font-bold tracking-widest uppercase"
            htmlFor="password"
          >
            Password
          </label>
          {/* <a
            className="text-primary hover:text-primary text-xs font-bold tracking-widest uppercase transition-colors"
            href="#"
          >
            Forgot?
          </a> */}
        </div>
        <div className="group relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <span className="group-focus-within:text-primary text-lg text-stone-400 transition-colors">
              <Lock size={18} />
            </span>
          </div>
          <input
            {...register('password')}
            className={`focus:ring-primary/20 focus:border-primary text-primary bg-primary/20 block w-full rounded-xl border py-3.5 pr-4 pl-11 shadow-sm transition-all outline-none placeholder:text-stone-400 focus:ring-2 ${
              formState.errors.password
                ? 'border-red-500'
                : 'border-transparent'
            }`}
            id="password"
            placeholder="••••••••"
            type={showPassword ? 'text' : 'password'}
          />
          <button
            className="text-primary hover:text-primary/60 absolute inset-y-0 right-0 flex items-center pr-4"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {formState.errors.password && (
          <p className="text-ssm ml-1 font-bold tracking-tighter text-red-500 uppercase">
            {formState.errors.password.message}
          </p>
        )}
      </div>

      {/* Checkbox Remember Me */}
      {/* <div className="flex items-center space-x-2 px-1">
        <input
          {...register('remember')}
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
      </div> */}

      {/* Submit button */}
      {
        <button
          className="bg-primary hover:bg-primary/90 text-primary-foreground my-6 flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold shadow-lg transition-all active:scale-95 disabled:opacity-70"
          type="submit"
          disabled={loginMutation.isPending ?? formState.isSubmitting}
        >
          {(loginMutation.isPending ?? formState.isSubmitting) ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing In...
            </>
          ) : (
            <>
              <span>
                {formState.isSubmitting ? 'Signing In...' : 'Sign In'}
              </span>
              <ArrowRight size={18} />
            </>
          )}
        </button>
      }
    </form>
  );
}

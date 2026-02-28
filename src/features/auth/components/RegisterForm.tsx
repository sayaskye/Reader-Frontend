import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AtSign, Lock, Eye, EyeOff, ArrowRight, User } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerSchema, type RegisterFormValues } from '@/schemas';
import { useRegister } from '@/features/auth/hooks';

export default function RegisterForm() {
  const registerMutation = useRegister();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    registerMutation.mutate(data);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      {/* nickname */}
      <div className="space-y-1">
        <label
          className="text-primary ml-1 block text-xs font-bold tracking-widest uppercase"
          htmlFor="nickname"
        >
          Nickname
        </label>
        <div className="group relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <span className="group-focus-within:text-primary text-lg text-stone-400 transition-colors">
              <User size={18} />
            </span>
          </div>
          <input
            {...register('nickname')}
            className={`focus:ring-primary/20 focus:border-primary text-primary bg-primary/20 block w-full rounded-xl border py-3.5 pr-4 pl-11 shadow-sm transition-all outline-none placeholder:text-stone-400 focus:ring-2 ${
              formState.errors.nickname
                ? 'border-red-500'
                : 'border-transparent'
            }`}
            id="nickname"
            placeholder="User120"
            type="nickname"
          />
        </div>
        {formState.errors.nickname && (
          <p className="text-ssm ml-1 font-bold tracking-tighter text-red-500 uppercase">
            {formState.errors.nickname.message}
          </p>
        )}
      </div>

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

      {/* Submit button */}
      <button
        className="bg-primary hover:bg-primary/90 text-primary-foreground my-6 flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold shadow-lg transition-all active:scale-95 disabled:opacity-70"
        type="submit"
        disabled={registerMutation.isPending ?? formState.isSubmitting}
      >
        <span>{formState.isSubmitting ? 'Registering...' : 'Register'}</span>
        <ArrowRight size={18} />
      </button>
    </form>
  );
}

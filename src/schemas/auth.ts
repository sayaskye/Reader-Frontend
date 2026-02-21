import * as z from 'zod';

export const loginSchema = z.object({
  email: z.email('Invalid Email'),
  password: z.string().min(8, 'Password must have at least 8 characters'),
  remember: z.boolean(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  nickname: z.string('Nickname required'),
  email: z.email('Invalid Email'),
  password: z.string().min(8, 'Password must have at least 8 characters'),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

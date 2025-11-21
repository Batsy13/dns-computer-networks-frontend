import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

export const sessionSchema = z.object({
  sessionId: z.string(),
  loginTime: z.string().datetime(),
});

export const profileResponseSchema = z.object({
  user: userSchema,
  session: sessionSchema,
  serverHostname: z.string(),
});

export const registerFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const loginFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

export type IUser = z.infer<typeof userSchema>;
export type ISession = z.infer<typeof sessionSchema>;
export type IProfileResponse = z.infer<typeof profileResponseSchema>;
export type RegisterFormValues = z.infer<typeof registerFormSchema>;
export type LoginFormValues = z.infer<typeof loginFormSchema>;
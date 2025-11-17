"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import {
  LoginFormValues,
  loginFormSchema,
} from '@/lib/models';
import { api } from '@/app/api/api';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '../ui/label';
import Link from 'next/link';

export function LoginForm() {
  const router = useRouter();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await api.post('/auth/login', values);
      toast.success('Login successful!');
      router.push('/me');
    } catch (error: any) {
      toast.error('Login Failed');
    }
  };

  return (
    <Card className="w-full h-[700px] shadow-[#ec1a1a]">
      <CardHeader>
        <CardTitle className='text-xl'>Login</CardTitle>
        <CardDescription>Enter your credentials to access your profile.</CardDescription>
      </CardHeader>
      <CardContent className='h-full'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="h-full flex flex-col gap-10">
            <div className='flex flex-col gap-4 m-0'>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="user@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
            <Button type="submit" className="w-full flex h-fit py-3 bg-[#ec1a1a] mt-auto cursor-pointer hover:bg-[#a51010] transition-all ease-in-out duration-300" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Logging in...' : 'Login'}
            </Button>
            <Label className='flex justify-end w-full gap-1 p-4'>Doesn't have an account?<Link href={"/register"} className='text-red-500 cursor-pointer'>Register</Link></Label>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
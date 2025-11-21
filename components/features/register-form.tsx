"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import {
  RegisterFormValues,
  registerFormSchema,
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
import Link from 'next/link';
import { Label } from '../ui/label';

export function RegisterForm() {
  const router = useRouter();
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: RegisterFormValues) => {
    try {
      const { confirmPassword, ...dataToSend } = values;
      
      await api.post('/auth/register', dataToSend);
      toast.success('Registration successful!', {
        description: 'Please log in to continue.',
      });
      router.push('/');
    } catch (error: any) {
      toast.error('Registration Failed', {
        description:
          error.response?.data?.message || 'An unknown error occurred.',
      });
    }
  };

  return (
    <Card className="w-full h-[700px] shadow-[#ec1a1a]">
      <CardHeader>
        <CardTitle className='text-xl'>Register</CardTitle>
        <CardDescription>Create a new account to get started.</CardDescription>
      </CardHeader>
      <CardContent className='h-full'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="h-full flex flex-col gap-10">
            <div className='flex flex-col gap-4 m-0'>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full flex h-fit py-3 bg-[#ec1a1a] mt-auto cursor-pointer hover:bg-[#a51010] transition-all ease-in-out duration-300" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Registering...' : 'Register'}
            </Button>
            <Label className='flex justify-end w-full gap-1 p-4'>Already have an account?<Link href={"/"} className='text-red-500 cursor-pointer'>Login</Link></Label>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
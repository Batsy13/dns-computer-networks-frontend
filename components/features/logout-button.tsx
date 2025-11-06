"use client";

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { api } from '@/lib/api';
import { Button } from '@/components/ui/button';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
      toast.success('Logged out successfully.');
      router.push('/');
    } catch (error: any) {
      toast.error('Logout Failed', {
        description: error.response?.data?.message || 'An unknown error occurred.',
      });
    }
  };

  return <Button onClick={handleLogout} variant="outline" className='cursor-pointer'>Logout</Button>;
}
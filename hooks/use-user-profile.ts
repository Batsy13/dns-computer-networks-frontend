"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { api } from '@/lib/api';
import { IProfileResponse, profileResponseSchema } from '@/lib/models';

const fetchProfile = async (): Promise<IProfileResponse> => {
  const { data } = await api.get('/auth/me');
  return profileResponseSchema.parse(data);
};

export function useUserProfile() {
  const router = useRouter();

  const { data, status, error } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
    retry: false,
  });

  useEffect(() => {
    if (status === 'error' && error) {
      const err = error as AxiosError;

      if (err.response?.status === 401) {
        toast.error('Unauthorized', {
          description: 'Please log in to view this page.',
        });
        router.push('/');
      } else {
        toast.error('Error', {
          description: 'Failed to fetch profile data.',
        });
      }
    }
  }, [status, error, router]);

  return { data, status, error };
}
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { useUserProfile } from '@/hooks/use-user-profile';
import { AxiosError } from 'axios';
import {
  AlertTriangle,
  Clock,
  KeyRound,
  Mail,
  Server,
  User,
} from 'lucide-react';

export function UserProfile() {
  const { data, status, error } = useUserProfile();

  if (status === 'pending') {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <Skeleton className="h-6 w-3/5" />
          <Skeleton className="h-4 w-2/5" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3">
            <Skeleton className="h-5 w-5 mt-1 rounded-sm" />
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-5 w-3/4" />
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Skeleton className="h-5 w-5 mt-1 rounded-sm" />
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-5 w-full" />
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Skeleton className="h-5 w-5 mt-1 rounded-sm" />
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-5 w-1/2" />
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Skeleton className="h-5 w-5 mt-1 rounded-sm" />
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-5 w-1/2" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (status === 'error' && error) {
    if ((error as AxiosError)?.response?.status === 401) {
      return null;
    }

    return (
      <Card className="w-full max-w-md border-l-4 border-l-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            Error Loading Profile
          </CardTitle>
          <CardDescription>{error.message}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const loginTime = data?.session.loginTime
    ? new Date(data.session.loginTime).toLocaleString()
    : 'N/A';

  return (
    <Card className="w-full max-w-md border-l-4 border-l-[#ec1a1a]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Welcome, {data?.user.name}
        </CardTitle>
        <CardDescription>Your session details.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 text-muted-foreground mt-1" />
          <div className="space-y-1">
            <Label>Email</Label>
            <p className="text-sm text-muted-foreground">{data?.user.email}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <KeyRound className="h-5 w-5 text-muted-foreground mt-1" />
          <div className="space-y-1">
            <Label>Session ID</Label>
            <p className="text-sm text-muted-foreground break-all">
              {data?.session.sessionId}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-muted-foreground mt-1" />
          <div className="space-y-1">
            <Label>Login Time</Label>
            <p className="text-sm text-muted-foreground">{loginTime}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Server className="h-5 w-5 text-muted-foreground mt-1" />
          <div className="space-y-1">
            <Label>Server Hostname</Label>
            <p className="text-sm font-mono text-muted-foreground">
              {data?.serverHostname}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
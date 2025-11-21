"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useUserProfile } from "@/hooks/use-user-profile";
import { AxiosError } from "axios";
import {
  AlertTriangle,
  Clock,
  KeyRound,
  Loader2Icon,
  Server,
} from "lucide-react";

export function UserProfile() {
  const { data, status, error } = useUserProfile();

  if (status === "pending") {
    return (
      <div className="flex flex-col gap-2 w-full h-full justify-center items-center">
        <Loader2Icon className="animate-spin size-10 text-red-500"/>
      </div>
    );
  }

  if (status === "error" && error) {
    if ((error as AxiosError)?.response?.status === 401) {
      return null;
    }

    return (
      <Card className="w-full max-w-md border-l-4 border-l-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="" />
            Error Loading Profile
          </CardTitle>
          <CardDescription>{error.message}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const loginTime = data?.session.loginTime
    ? new Date(data.session.loginTime).toLocaleString()
    : "N/A";

  return (
    <div className="flex flex-col gap-2 w-full h-full">

      <h1 className="text-[36px]">
        Welcome, {data?.user.name}
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex gap-2 items-center w-full">
              <KeyRound className=" text-red-500 mt-1" size={40} />
              <div className="space-y-1 w-full">
                <Label className="text-[20px] w-full">Session ID</Label>
                <p className="text-sm text-muted-foreground break-all">
                  {data?.session.sessionId}
                </p>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader >
            <CardTitle className="flex gap-2 items-center w-full">
              <Clock className=" text-red-500 mt-1" size={40} />
              <div className="space-y-1 w-full">
                <Label className="text-[20px] w-full">Login Time</Label>
                <p className="text-sm text-muted-foreground">{loginTime}</p>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
      <div className="mx-auto min-w-2xl p-6 bg-card flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
        <div className="flex gap-2 items-center w-full">
          <Server className="text-red-500 mt-1" size={40} />
          <div className="space-y-1 w-full">
            <Label className="text-[20px] w-full">Server Hostname</Label>
            <p className="text-sm font-mono text-muted-foreground">
              {data?.serverHostname}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
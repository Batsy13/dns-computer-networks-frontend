import { api } from "@/app/api/api";
import { IProfileResponse, profileResponseSchema } from "@/lib/models";

export const fetchProfile = async (): Promise<IProfileResponse> => {
  const { data } = await api.get('/auth/me');
  return profileResponseSchema.parse(data);
};
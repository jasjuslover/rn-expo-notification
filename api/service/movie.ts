import { api } from "@/utils/axios";

export async function getNowPlaying(page: number): Promise<Movie[]> {
  const response = await api.get<Movie[]>(
    `/now_playing?language=en-US&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
}

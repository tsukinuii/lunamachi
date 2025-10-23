import { http } from "./http/fetcher";

export type LoginResp = { token: string; user: { id: string; email: string; name?: string } };

export async function login(email: string, password: string): Promise<LoginResp> {
  return http<LoginResp>("/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}
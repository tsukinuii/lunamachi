"use server";
import { login } from "@/services/auth.service";

export async function _loginAction(email: string, password: string) {
  // สามารถใส่ try/catch, cookie, redirect ที่นี่
  const res = await login(email, password);
  return res; // { token, user }
}
"use client";

// import { Moon, Star } from "lucide-react";
import LoginForm from "@/components/features/login/LoginForm";
// import { loginAction } from "@/actions/authActions";
import * as React from "react";
import { Sparkles, Moon, Star } from "lucide-react";

export default function Login() {
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>();

  async function handleSubmit({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      setSubmitting(true);
      setError(undefined);
      // const res = await loginAction(email, password);
      // console.log("login ok:", res);
      console.log("login ok:", email, password);
    } catch (e: unknown) {
      const message =
        typeof e === "object" && e !== null && "message" in e
          ? String((e as { message?: unknown }).message)
          : "Login failed";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="flex items-center gap-2 text-center justify-center rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-center">
            <Moon className="h-10 w-10 text-primary" />
            <Star className="h-6 w-6 text-secondary" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">LunaMachi</span>
            <p className="text-primary font-medium">Your Moonlit Marketplace</p>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="space-y-1 mb-4">
            <div className="text-2xl text-center flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              เข้าสู่ระบบ
            </div>
            <div className="text-center">
              กรอกอีเมลและรหัสผ่านเพื่อเข้าสู่เมืองแห่งพระจันทร์
            </div>
          </div>
          <LoginForm
            submitting={submitting}
            onSubmit={handleSubmit}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState, type FormEvent } from "react";
import LoginField from "./LoginField";
import Button from "@/components/ui/button/Button";
import { isValidEmail, isNonEmpty } from "@/lib/validators";
import { Mail, Lock, Eye, EyeOff, Moon } from "lucide-react";

export type LoginFormValues = { email: string; password: string };
type LoginFormProps = {
  submitting?: boolean;
  onSubmit: (values: LoginFormValues) => Promise<void> | void;
  error?: string;
};

export function LoginForm({ submitting, onSubmit, error }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email) || !isNonEmpty(password)) {
      return;
    }

    await onSubmit({ email, password });
  }

  const isDisabled = submitting || !(isValidEmail(email) && isNonEmpty(password));

  return (
    <>
      <form onSubmit={handleSubmit} className="grid gap-3 w-full max-w-sm">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
          <LoginField
            type="email"
            label="Email"
            name="email"
            onChange={setEmail}
            placeholder={"กรอกอีเมลของคุณ"}
            className="pl-10"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
          <LoginField
            type={showPassword ? "text" : "password"}
            label="Password"
            name="password"
            onChange={setPassword}
            placeholder={"กรอกรหัสผ่านของคุณ"}
            className="pl-10"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="show password"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Eye className="h-4 w-4 text-muted-foreground" />
            ) : (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button
          type="submit"
          disabled={isDisabled}
          loading={submitting}
          aria-label="Sign in"
        >
          <div className="flex items-center justify-center gap-2">
            <Moon className="mr-2 h-4 w-4" />
            {"เข้าสู่ระบบ"}
          </div>
        </Button>
      </form>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-card px-2 text-muted-foreground">หรือ</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="w-full bg-white rounded-lg border border-gray-300 text-gray-900 hover:bg-accent/90 hover:text-accent-foreground">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Google
        </Button>
        <Button variant="outline" className="w-full bg-white rounded-lg border border-gray-300 text-gray-900 hover:bg-accent/90 hover:text-accent-foreground">
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </Button>
      </div>
    </>
  );
}
export default LoginForm;

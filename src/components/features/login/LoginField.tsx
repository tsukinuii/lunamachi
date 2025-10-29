"use client";
import * as React from "react";
import { Input } from "@/components/ui/input/index";

type LoginFieldProps = {
  type: "email" | "password" | "text";
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  onChange: (v: string) => void;
  className?: string;
  showPassword?: boolean;
};

export function LoginField({
  type,
  label,
  name,
  placeholder,
  error,
  onChange,
  className,
  showPassword,
}: LoginFieldProps) {
  return (
    <Input
      type={showPassword ? "text" : type}
      label={label}
      name={name}
      placeholder={placeholder}
      error={error}
      onChange={(e) => onChange(e.currentTarget.value)}
      autoComplete={name === "password" ? "current-password" : "email"}
      className={className}
    />
  );
}
export default LoginField;

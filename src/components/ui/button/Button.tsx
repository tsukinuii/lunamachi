"use client";
import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  // variant?: "primary" | "secondary" | "ghost";
  variant?: string;
  size?: "default" | "icon";
  disabled?: boolean;
};

export function Button({
  loading,
  variant = "primary",
  className = "",
  children,
  type = "button",
  size = "default",
  disabled = false,
  ...props
}: ButtonProps) {


  return (
    <button
      className={[
        "h-10 rounded-md px-4 font-medium",
        size === "icon" ? "h-10 w-10" : "",
        disabled ? "opacity-60" : "cursor-pointer",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : variant === "secondary"
          ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
          : " ",
        className,
      ].join(" ")}
      aria-busy={loading || undefined}
      type={type}
      disabled={disabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
export default Button;

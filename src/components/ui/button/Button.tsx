"use client";
import * as React from "react";
import { Loader } from "lucide-react";

type Variant = "primary" | "secondary" | "default" | "outline" | "custom";
type Size = "sm" | "md" | "lg";
type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: Variant;
  disabled?: boolean;
  size?: Size;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variantCustom?: string;
  sizeCustom?: Partial<{
    height: string;
    paddingX: string;
    gap: string;
    fontSize: string;
  }>;
};
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Props;

export const Button = ({
  children,
  className,
  variant = "default",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  leftIcon,
  rightIcon,
  sizeCustom,
  variantCustom,
  ...props
}: ButtonProps) => {
  const base =
    "relative inline-flex items-center justify-center rounded-lg font-medium transition " +
    "h-[var(--btn-h)] px-[var(--btn-px)] gap-[var(--btn-gap)] text-[length:var(--btn-text)]";

  const variants: Record<Variant, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    default: "bg-white text-primary hover:bg-primary/90 hover:text-primary-foreground",
    outline: "border border-primary text-primary hover:bg-primary/90 hover:text-primary-foreground",
    custom: variantCustom || "",
  };

  const sizes = {
    sm: { h: "2rem", px: "0.5rem", gap: "0.25rem", text: "0.875rem" },
    md: { h: "2.5rem", px: "1rem", gap: "0.5rem", text: "0.875rem" },
    lg: { h: "3rem", px: "1.25rem", gap: "0.625rem", text: "1rem" },
  } as const;

  const preset = sizes[size];
  const styleSize = {
    ["--btn-h" as string]: sizeCustom?.height ?? preset.h,
    ["--btn-px" as string]: sizeCustom?.paddingX ?? preset.px,
    ["--btn-gap" as string]: sizeCustom?.gap ?? preset.gap,
    ["--btn-text" as string]: sizeCustom?.fontSize ?? preset.text,
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      {...props}
      data-variant={variant}
      data-size={size}
      aria-busy={loading || undefined}
      aria-disabled={loading ? true : undefined}
      style={styleSize}
      className={`${base} ${variants[variant]} ${
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
      } ${className ?? ""}`}
      onClick={handleClick}
    >
      {loading ? (
        <span className="animate-spin inline-flex">
          <Loader />
        </span>
      ) : (
        <>
          {leftIcon && (
            <span aria-hidden className="inline-flex">
              {leftIcon}
            </span>
          )}
          <span>{children}</span>
          {rightIcon && (
            <span aria-hidden className="inline-flex">
              {rightIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
};

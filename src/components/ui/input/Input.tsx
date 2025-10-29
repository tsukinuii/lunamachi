"use client";
import * as React from "react";

type Props = {
  label?: string;
  error?: string;
  helperText?: string;
  ref?: React.RefObject<HTMLInputElement>;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & Props;

export const Input = ({
  label,
  error,
  helperText,
  id,
  className = "",
  ref,
  ...props
}: InputProps) => {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  const describedBy =
    [helperText ? `${inputId}-helper` : null, error ? `${inputId}-error` : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={inputId}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        className={[
          "h-10 rounded-md border px-3 outline-none",
          error ? "border-red-500" : "border-gray-300",
          "focus:ring-2 focus:ring-blue-500",
          className,
        ].join(" ")}
        {...props}
      />
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="text-xs text-gray-500">
          {helperText}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

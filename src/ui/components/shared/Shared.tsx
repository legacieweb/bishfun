import { ReactNode } from "react";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-accent text-white hover:bg-accent-hover focus:ring-accent shadow-sm hover:shadow-md",
    secondary:
      "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 focus:ring-gray-500",
    ghost:
      "text-gray-600 hover:text-accent hover:bg-accent-subtle focus:ring-accent",
    accent:
      "bg-accent-subtle text-accent hover:bg-accent hover:text-white focus:ring-accent",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
    xl: "px-6 py-3 text-xl",
  };

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="animate-spin rounded-full border-2 border-current border-t-transparent w-4 h-4" />
      ) : leftIcon ? (
        <span className="flex items-center">{leftIcon}</span>
      ) : null}
      {loading ? "Loading..." : children}
      {!loading && rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, className, ...props }: InputProps) => (
  <div className={clsx("mb-4", className)}>
    {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
    <input
      className={clsx(
        "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-base focus:border-accent focus:ring-accent",
        error && "border-error focus:border-error focus:ring-error",
      )}
      {...props}
    />
    {error && <p className="mt-1 text-sm text-error">{error}</p>}
  </div>
);

export const Badge = ({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "success" | "warning" | "error" | "outline";
  className?: string;
}) => {
  const variantClasses = {
    default: "bg-gray-100 text-gray-800",
    accent: "bg-accent-subtle text-accent",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    error: "bg-error/10 text-error",
    outline: "border border-gray-300 text-gray-700",
  };
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};

export { Button, Input, Badge };
export type { ButtonProps, InputProps };

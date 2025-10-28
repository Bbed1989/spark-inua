import clsx from "clsx";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
};

export default function Button({
  variant = "primary",
  // eslint-disable-next-line react/prop-types
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "px-6 py-2 rounded-md font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
    secondary:
      "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-400",
    outline:
      "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-400",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

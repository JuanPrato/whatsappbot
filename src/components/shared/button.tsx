import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  type?: "outline" | "fill";
}

export function Button({ children, type = "outline" }: Props) {

  const className = type === "outline" ? "rounded-lg border border-opacity-30 w-32 py-3 text-center font-semibold text-primary-dark" :
    "rounded-lg bg-primary w-32 py-3 text-center font-semibold text-white"

  return (
    <a href="#" className={className}>{children}</a>
  );
}
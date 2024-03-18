import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type Type = "outline" | "fill";
type Size = "md" | "lg";

interface Props {
  children?: ReactNode;
  type?: Type;
  Icon?: IconType;
  className?: string;
  size?: Size;
  href?: string;
}

const classesTypeMap: { [key: string]: string } = {
  outline: "border border-opacity-30 text-primary-dark",
  fill: "bg-primary text-white",
};

const classesSizeMap: { [key: string]: string } = {
  md: "min-w-32",
  lg: "min-w-40 text-lg",
};

export function Anchor({
  children,
  type = "outline",
  Icon,
  className,
  size = "md",
  href,
}: Props) {
  return (
    <a
      href={href || "#"}
      className={twMerge(
        "flex items-center justify-center gap-3 rounded-lg p-3 text-center font-semibold",
        classesTypeMap[type],
        classesSizeMap[size],
        className,
      )}
    >
      {children}
      {Icon && <Icon size={30} className="text-white" />}
    </a>
  );
}

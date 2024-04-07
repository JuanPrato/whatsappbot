import { twMerge } from "tailwind-merge";

export function Badge({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <span
      onClick={onClick}
      className={twMerge(
        "inline-flex items-center truncate text-nowrap rounded-md bg-primary px-2 py-1 text-xs font-medium text-dark ring-1 ring-inset ring-primary/10",
        className,
      )}
    >
      {text}
    </span>
  );
}

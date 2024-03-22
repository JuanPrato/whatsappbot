import Link from "next/link";
import type { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface Props {
  Icon: IconType;
  isActive?: boolean;
}

export function HeaderIcon({ Icon, isActive }: Props) {
  return (
    <Link href="#">
      <Icon
        className={twMerge(
          "h-14 w-14 text-text",
          !isActive && "text-opacity-70",
        )}
      />
    </Link>
  );
}

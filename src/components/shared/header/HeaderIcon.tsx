import Link from "next/link";
import { ComponentProps, ElementType } from "react";
import type { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface Props<> {
  Icon: IconType;
  isActive?: boolean;
  as?: never;
  properties?: never;
}

interface PropsWithAs<T extends ElementType> {
  Icon: IconType;
  isActive?: boolean;
  as: T;
  properties: ComponentProps<T>;
}

export function HeaderIcon<T extends ElementType>({
  Icon,
  isActive,
  as,
  properties,
}: Props | PropsWithAs<T>) {
  const As = as || Link;
  const props = properties ? properties : { href: "#" };

  return (
    <As {...props}>
      <Icon
        className={twMerge(
          "h-14 w-14 text-text",
          !isActive && "text-opacity-70",
        )}
      />
    </As>
  );
}

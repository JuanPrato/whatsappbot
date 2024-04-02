import { ComponentProps, ElementType, ReactNode } from "react";

interface PropsWithAs<T extends ElementType> {
  title: string;
  children?: ReactNode;
  as: T;
  properties: ComponentProps<T>;
}

interface Props {
  title: string;
  children?: ReactNode;
  as?: never;
  properties?: never;
}

export function Box<T extends ElementType>({
  title,
  children,
  as,
  properties,
}: Props | PropsWithAs<T>) {
  const As = as || "div";
  return (
    <As className="flex flex-col gap-5" {...(properties || {})}>
      <header>
        <h3 className="text-2xl font-medium">{title}</h3>
      </header>
      <div className="flex h-full flex-col gap-3 rounded-lg bg-text p-5">
        {children}
      </div>
    </As>
  );
}

import { ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
}

export function Box({ title, children }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <header>
        <h3 className="text-2xl font-medium">{title}</h3>
      </header>
      <div className="flex h-full flex-col gap-3 rounded-lg bg-text p-5">
        {children}
      </div>
    </div>
  );
}

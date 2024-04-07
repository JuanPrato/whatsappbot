import { ReactNode } from "react";

interface Props {
  title: string;
  icon?: ReactNode;
  phone?: string;
}

export function UserCategoryHeader(props: Props) {
  return (
    <header className="flex w-full items-center justify-between">
      <h1 className="text-5xl">
        {props.title}
        <span className="ml-2 text-2xl text-text text-opacity-90">
          {props.phone && `(${props.phone})`}
        </span>
      </h1>
      {props.icon && props.icon}
    </header>
  );
}

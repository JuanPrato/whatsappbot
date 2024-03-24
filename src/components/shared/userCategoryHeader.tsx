import { IconType } from "react-icons";

interface Props {
  title: string;
  icon?: IconType;
}

export function UserCategoryHeader(props: Props) {
  return (
    <header className="flex w-full items-center justify-between">
      <h1 className="text-5xl">{props.title}</h1>
      {props.icon && <props.icon />}
    </header>
  );
}

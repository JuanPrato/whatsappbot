import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  value: number;
}

export default function Statistic(props: Props) {
  return (
    <div className="flex w-full items-center justify-between text-light">
      <div className="flex items-center gap-2 ">
        <props.icon className="h-6 w-6" />
        <h3 className="text-xl">{props.title}</h3>
      </div>
      <h4 className="text-xl">
        {props.value}
        <span className="text-sm text-white text-opacity-50">/mes</span>
      </h4>
    </div>
  );
}

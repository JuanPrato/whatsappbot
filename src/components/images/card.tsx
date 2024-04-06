import { File } from "@/common/types";
import { FaTrash } from "react-icons/fa";

interface Props {
  file: File;
}

export function Card({ file: picture }: Props) {
  return (
    <li
      key={picture.id}
      className="group flex aspect-square h-auto w-[200px] cursor-pointer flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${picture.url})` }}
    >
      <div></div>
      <FaTrash className="mx-auto size-[50px] animate-wiggle text-danger opacity-0 transition-[transform,opacity] hover:scale-105 group-hover:opacity-90" />

      <h3 className="bottom-2 left-2 truncate text-light">
        {picture.description}
      </h3>
    </li>
  );
}

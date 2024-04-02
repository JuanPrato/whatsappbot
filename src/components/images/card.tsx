import { Image } from "@/common/types";
import { FaTrash } from "react-icons/fa";

interface Props {
  picture: Image;
}

export function Card({ picture }: Props) {
  return (
    <li
      key={picture.id}
      className="relative h-auto w-[200px] overflow-hidden rounded-lg"
    >
      <FaTrash className="absolute right-2 top-2 z-10 size-[25px] text-danger transition-transform hover:scale-105" />
      <img
        src={picture.url}
        alt={`Imagen subida`}
        className="mask-image-linear aspect-square"
      />
      <h3 className="absolute bottom-2 left-2 text-light">
        {picture.description}
      </h3>
    </li>
  );
}

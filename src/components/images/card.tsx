import { Image } from "@/common/types";
import { FaTrash } from "react-icons/fa";

interface Props {
  picture: Image;
}

export function Card({ picture }: Props) {
  return (
    <li
      key={picture.id}
      className="relative aspect-square h-auto w-[200px] overflow-hidden rounded-lg"
    >
      <FaTrash className="absolute right-2 top-2 z-10 size-[25px] text-danger transition-transform hover:scale-105" />
      <img
        src={picture.url}
        alt={`Imagen subida`}
        className="mask-image-linear mx-auto max-h-full max-w-full"
      />
      <h3 className="absolute bottom-2 left-2 text-light">
        {picture.description}
      </h3>
    </li>
  );
}

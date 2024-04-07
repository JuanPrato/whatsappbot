import { File } from "@/common/types";
import type { IconType } from "react-icons";
import { FaRegFilePdf } from "react-icons/fa6";
import { DeleteFileButton } from "./deleteFileButton";

const FileTypes: { [key: string]: IconType } = {
  pdf: FaRegFilePdf,
};

function getIcon(file: File): IconType | undefined {
  return FileTypes[file.type satisfies keyof typeof FileTypes];
}

interface Props {
  file: File;
}

export function Card({ file }: Props) {
  const Icon = getIcon(file);

  return (
    <li
      key={file.id}
      className="group relative flex aspect-square h-auto w-[200px] cursor-pointer flex-col justify-between"
    >
      <div
        className="h-full w-full bg-cover bg-center group-hover:blur"
        style={{ backgroundImage: !Icon ? `url(${file.url})` : "" }}
      >
        {Icon && (
          <Icon className="absolute left-[calc(50%-40px)] top-[calc(50%-40px)] size-[80px] text-light" />
        )}
      </div>
      <div className="absolute left-0 top-0 flex size-[200px] flex-col">
        <div className="flex grow items-center justify-center">
          <DeleteFileButton file={file} />
        </div>
        <h3 className="bottom-2 left-2 truncate text-light">
          {file.description}
        </h3>
      </div>
    </li>
  );
}

"use client";

import { deleteFile } from "@/app/images/actions";
import { File } from "@/common/types";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Loading } from "../shared/loading";

interface Props {
  file: File;
}

export function DeleteFileButton({ file }: Props) {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <button
      onClick={async () => {
        if (isDeleting) return;
        setIsDeleting(true);
        const data = new FormData();
        data.set("file", file.description);
        console.log(file.description);
        const { success } = await deleteFile(data);
        console.log(success);
        setIsDeleting(false);
      }}
    >
      {isDeleting ? (
        <Loading />
      ) : (
        <FaTrash className="mx-auto size-[50px] animate-wiggle text-danger opacity-0 transition-[transform,opacity] hover:scale-105 group-hover:opacity-90" />
      )}
    </button>
  );
}

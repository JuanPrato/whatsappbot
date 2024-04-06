"use client";

import { ChangeEvent } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Loading } from "../shared/loading";
import { twMerge } from "tailwind-merge";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();

export function UploadImageButton() {
  const { isUploading, startUpload } = useUploadThing("imageUploader");

  async function onChange(e: ChangeEvent<HTMLInputElement>) {
    try {
      const file = e.target.files?.item(0)!;
      await startUpload([file]);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <label
      className={twMerge(
        "h-16 w-16 cursor-pointer rounded-lg bg-text p-3 active:scale-95",
        isUploading && "cursor-not-allowed grayscale-[80%]",
      )}
    >
      <input
        type="file"
        name="file"
        className="hidden"
        disabled={isUploading}
        onChange={onChange}
      />
      {isUploading ? (
        <Loading />
      ) : (
        <FaCloudUploadAlt className="h-full w-full text-primary shadow-primary-dark drop-shadow-button" />
      )}
    </label>
  );
}

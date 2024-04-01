"use client";

import { ReactNode, useRef, HTMLProps, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children?: ReactNode;
  darkBg?: boolean;
  open: boolean;
  onCancel: () => void;
}

export default function Modal({ children, open, onCancel }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);

  const onClick: HTMLProps<HTMLDialogElement>["onClick"] = (e) => {
    if (e.target === ref.current) {
      ref.current.close();
    }
  };
  console.log(open);
  return (
    <dialog
      ref={ref}
      className={twMerge(
        "grid place-content-center backdrop:bg-[rgba(0,0,0,.7)]",
        !open && "hidden",
      )}
      onClick={onClick}
      onClose={onCancel}
    >
      {children}
    </dialog>
  );
}

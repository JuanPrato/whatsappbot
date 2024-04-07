"use client";

import { toggleBot } from "@/app/dashboard/actions";
import { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { Loading } from "./loading";

interface Props {
  phone: string;
  defaultState: boolean;
}

export function PowerButton({ phone, defaultState }: Props) {
  const [isActive, setIsActive] = useState(defaultState);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button
      className={"h-16 w-16 rounded-full bg-text p-2 active:scale-95"}
      onClick={async () => {
        setIsLoading(true);
        const { success } = await toggleBot(phone, !isActive);
        if (success) setIsActive(!isActive);
        setIsLoading(false);
      }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <FaPowerOff
          className={twMerge(
            "h-full w-full shadow-primary-dark",
            isActive ? "text-primary drop-shadow-button" : "text-black",
          )}
        />
      )}
    </button>
  );
}

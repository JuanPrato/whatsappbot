"use client";

import { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export function PowerButton() {
  const [isActive, setIsActive] = useState(true);

  return (
    <button
      className={"h-16 w-16 rounded-full bg-text p-2 active:scale-95"}
      onClick={() => setIsActive(!isActive)}
    >
      <FaPowerOff
        className={twMerge(
          "h-full w-full shadow-primary-dark",
          isActive ? "drop-shadow-button text-primary" : "text-black",
        )}
      />
    </button>
  );
}

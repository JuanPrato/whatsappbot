import { type ReactNode } from "react";
import { Anchor } from "./anchor";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  price: number;
  rightIcon?: ReactNode;
  advantages: string[];
  theme: "light" | "dark";
  isPrincipal?: boolean;
}

export function PricingCard({
  title,
  price,
  rightIcon,
  advantages,
  theme,
  isPrincipal = false,
}: Props) {
  return (
    <div
      className={twMerge(
        "relative z-10 flex w-[300px] flex-col justify-between gap-2 rounded-lg p-5",
        theme === "dark" ? "bg-text text-light" : "bg-light text-text",
        isPrincipal && "outline-accent animate-outline outline outline-[15px]",
      )}
    >
      <header
        className={twMerge(
          "flex justify-between border-b border-opacity-25 pb-2",
          theme === "dark" ? "borer-text-neg" : "border-text",
        )}
      >
        <h3 className="text-4xl">{title}</h3>
        {rightIcon}
      </header>
      <div className="flex h-full flex-col justify-between">
        <h4 className="text-4xl">USD {price}</h4>
        <ul className="my-3 flex h-full flex-col justify-between gap-3">
          {advantages.map((advantage, i) => (
            <li key={i}>{advantage}</li>
          ))}
        </ul>
      </div>
      <footer
        className={twMerge(
          "flex border-t border-opacity-25 pt-4",
          theme === "dark" ? "borer-text-neg" : "border-text",
        )}
      >
        <Anchor
          type="fill"
          className={
            theme === "dark" ? "bg-text-neg text-text" : "bg-text text-text-neg"
          }
        >
          Comenzar ahora
        </Anchor>
      </footer>
    </div>
  );
}

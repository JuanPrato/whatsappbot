"use client";

import { twMerge } from "tailwind-merge";
import { Button } from "./button";
import { useEffect, useRef } from "react";
import useScroll from "@/hooks/useScroll";

export default function Header() {
  const header = useRef<HTMLHeadElement>(null);

  const scroll = useScroll();

  useEffect(() => {
    if (scroll.y === 0) header.current?.classList.remove("shadow-md");
    else if (scroll.y > 0) header.current?.classList.add("shadow-md");
  }, [scroll.y]);

  return (
    <header
      className={twMerge(
        "sticky top-0 flex h-28 items-center justify-between bg-white px-11 transition",
      )}
      ref={header}
    >
      <section className="flex items-center">
        <img src="./LOGO.png" className="h-[100px] w-[100px]" />
        <h1 className="text-3xl font-medium text-primary">WHATSAPPBOT</h1>
      </section>
      <nav className="flex items-center gap-10">
        <a href="#" className="font-light">
          Contacto
        </a>
        <a href="#" className="font-light">
          Servicios y Precios
        </a>
        <Button>Ingresa</Button>
        <Button type="fill">Regístrate</Button>
      </nav>
    </header>
  );
}

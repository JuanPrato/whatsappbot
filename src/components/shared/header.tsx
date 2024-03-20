"use client";

import { twMerge } from "tailwind-merge";
import { Anchor } from "./anchor";
import { useEffect, useRef } from "react";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";

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
      <Link href="/">
        <section className="flex items-center">
          <img src="./LOGO.png" className="h-[100px] w-[100px]" />
          <h1 className="text-3xl font-medium text-primary">WHATSAPPBOT</h1>
        </section>
      </Link>
      <nav className="flex items-center gap-10">
        <Link href="/#contact" className="text-text font-light">
          Contacto
        </Link>
        <Link href="/#pricing" className="text-text font-light">
          Servicios y Precios
        </Link>
        <Anchor href="/login">Ingresa</Anchor>
        <Anchor type="fill">Regístrate</Anchor>
      </nav>
    </header>
  );
}

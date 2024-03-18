import { Anchor } from "../shared/anchor";
import { IoLogoWhatsapp } from "react-icons/io";

export function Hero() {
  return (
    <main className="flex h-[calc(100vh-7rem)] w-full justify-center gap-1 overflow-hidden bg-white px-[15%]">
      <section className="flex w-full flex-col items-start justify-center gap-3">
        <h2 className="text-3xl font-medium text-primary-dark">
          NO PIERDAS VENTAS POR UN DESCUIDO
        </h2>
        <p className="text-xl font-light">
          Simplifica la reserva de tus servicios con solo unos pocos mensajes de
          WhatsApp. Sin llamadas, sin esperas.
        </p>
        <Anchor
          type="fill"
          Icon={IoLogoWhatsapp}
          size="lg"
          className="bg-accent hover:animate-wiggle"
        >
          Contáctenos
        </Anchor>
      </section>
      <img className="h-full w-full" src="./HERO.png" alt="hero image" />
    </main>
  );
}

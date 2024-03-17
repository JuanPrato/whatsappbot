import { Button } from "./button";

export default function Header() {
  return (
    <header className="px-11 h-28 flex justify-between items-center">
      <section className="flex items-center">
        <img src="./LOGO.png" className="w-[100px] h-[100px]" />
        <h1 className="text-primary font-medium text-3xl">
          WHATSAPPBOT
        </h1>
      </section>
      <nav className="flex items-center gap-10">
        <a href="#" className="font-light">Contacto</a>
        <a href="#" className="font-light">Servicios y Precios</a>
        <Button>
          Ingresa
        </Button>
        <Button type="fill">
          Regístrate
        </Button>
      </nav>
    </header>
  );
}
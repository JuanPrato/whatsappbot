import { MenuItem } from "@/common/types";
import { ButtonInput } from "../shared/input";
import MenuItemCard from "./menuItemCard";

const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    title: "Precios",
    reply: `Placa de video: $1900\nOtra cosa: $1000`,
  },
  {
    id: "2",
    title: "Horarios",
    reply: `Lunes: 9:00 a 18:00\nMartes: 9:00 a 18:00\nMiércoles: 9:00 a 18:00\nJueves: 9:00 a 18:00\nViernes: 9:00 a 18:00`,
  },
];

export default function UserMenu() {
  return (
    <section className="flex grow flex-col gap-3 py-5">
      <header className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-medium">Menú</h2>
        <ButtonInput label="Importar por excel" />
      </header>
      <div className="grid h-full grow grid-cols-2 gap-16">
        {MENU_ITEMS.map((item) => (
          <MenuItemCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

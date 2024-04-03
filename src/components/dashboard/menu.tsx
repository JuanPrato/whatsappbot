import { Command } from "@/common/types";
import MenuItemCard from "./menuItemCard";
import { EditMenuItemModal } from "./editMenuItemModal";

interface Props {
  items: Command[];
}

export default function UserMenu(props: Props) {
  return (
    <section className="flex grow flex-col gap-3 py-5">
      <header className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-medium">Menú</h2>
        <EditMenuItemModal
          label="Agregar nuevo item"
          openButtonColor="bg-primary"
        />
      </header>
      <div className="grid h-full grow grid-cols-2 gap-16">
        {props.items.map((item) => (
          <MenuItemCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

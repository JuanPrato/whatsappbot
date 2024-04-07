import { Command } from "@/common/types";
import MenuItemCard from "./menuItemCard";
import { EditMenuItemModal } from "./editMenuItemModal";
import Files from "@/models/files";

interface Props {
  items: Command[];
  phone: string;
}

export default async function UserMenu(props: Props) {
  const files = await Files.getAllFiles(props.phone);

  return (
    <section className="flex grow flex-col gap-3 py-5">
      <header className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-medium">Menú</h2>
        <EditMenuItemModal
          label="Agregar nuevo item"
          openButtonColor="bg-primary"
          phone={props.phone}
          files={files}
        />
      </header>
      <div className="grid h-full grow grid-cols-2 gap-16">
        {props.items.map((item) => (
          <MenuItemCard
            item={item}
            key={item.id}
            phone={props.phone}
            files={files}
          />
        ))}
      </div>
    </section>
  );
}

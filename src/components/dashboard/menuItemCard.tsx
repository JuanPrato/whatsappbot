import { Command } from "@/common/types";
import { ButtonInput } from "../shared/input";
import { EditMenuItemModal } from "./editMenuItemModal";

interface Props {
  item: Command;
}

export default function MenuItemCard({ item }: Props) {
  return (
    <div key={item.id} className="flex flex-col rounded-lg bg-dark p-5">
      <header>
        <h3 className="text-xl font-medium text-light">{item.title}</h3>
      </header>
      <div className="flex grow flex-col border-y border-white border-opacity-30 py-1">
        <h4 className="font-regular text-base text-light">Respuesta</h4>
        <p className="grow whitespace-pre-wrap rounded-lg bg-light p-2">
          {item.reply}
        </p>
      </div>
      <footer className="flex justify-between py-1">
        <EditMenuItemModal item={item} />
        <ButtonInput
          label="Eliminar"
          inputClassName="min-w-[200px] bg-red-500 text-light"
        />
      </footer>
    </div>
  );
}

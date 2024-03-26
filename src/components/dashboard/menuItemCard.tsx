import { MenuItem } from "@/common/types";
import { ButtonInput } from "../shared/input";

interface Props {
  item: MenuItem;
}

export default function MenuItemCard({ item }: Props) {
  return (
    <div key={item.id} className="bg-dark flex flex-col rounded-lg p-5">
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
        <ButtonInput
          label="Editar"
          inputClassName="min-w-[200px] bg-yellow-500"
        />
        <ButtonInput
          label="Eliminar"
          inputClassName="min-w-[200px] bg-red-500 text-light"
        />
      </footer>
    </div>
  );
}

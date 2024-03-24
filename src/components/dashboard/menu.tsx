import { ButtonInput } from "../shared/input";

export default function UserMenu() {
  return (
    <section>
      <header className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-medium">Menú</h2>
        <ButtonInput label="Importar por excel" />
      </header>
    </section>
  );
}

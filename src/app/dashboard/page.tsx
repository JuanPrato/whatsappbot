import { Box } from "@/components/dashboard/box";
import { ButtonInput, TextInput } from "@/components/shared/input";
import { PowerButton } from "@/components/shared/powerButton";

export default function DashBoardPage() {
  return (
    <div className="ml-[7rem] flex h-full min-h-screen flex-col gap-6 bg-light px-20 py-12">
      <header className="flex w-full items-center justify-between">
        <h1 className="text-5xl">Información y gestión de tu bot</h1>
        <PowerButton />
      </header>
      <section>
        <div className="grid grid-cols-2 gap-16">
          <Box title="Define el mensaje de bienvenida">
            <TextInput
              placeholder="Bienvenido a la tienda virtual"
              inputClassName="bg-light"
            />
            <ButtonInput
              label="Guardar"
              inputClassName="text-light font-semibold w-"
            />
          </Box>
          <Box title="Datos sobre el ultimo mes">
            <h3 className="text-light">🗣️ Interacciones</h3>
            <h3 className="text-light">🚩 Conversaciones</h3>
            <h3 className="text-light">🐎 Reencuentros</h3>
          </Box>
        </div>
      </section>
      <section>
        <header className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-medium">Menú</h2>
          <ButtonInput label="Importar por excel" />
        </header>
      </section>
    </div>
  );
}

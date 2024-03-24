import { ButtonInput } from "@/components/shared/input";
import { PowerButton } from "@/components/shared/powerButton";
import UserStatistics from "@/components/dashboard/userStatistics";
import WelcomeMessage from "@/components/dashboard/welcomeMessage";

export default function DashBoardPage() {
  return (
    <div className="ml-[7rem] flex h-full min-h-screen flex-col gap-6 bg-light px-20 py-12">
      <header className="flex w-full items-center justify-between">
        <h1 className="text-5xl">Información y gestión de tu bot</h1>
        <PowerButton />
      </header>
      <section>
        <div className="grid grid-cols-2 gap-16">
          <WelcomeMessage />
          <UserStatistics />
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

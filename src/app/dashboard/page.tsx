import { PowerButton } from "@/components/shared/powerButton";
import UserStatistics from "@/components/dashboard/userStatistics";
import WelcomeMessage from "@/components/dashboard/welcomeMessage";
import UserMenu from "@/components/dashboard/menu";
import { UserCategoryHeader } from "@/components/shared/userCategoryHeader";

export default function DashBoardPage() {
  return (
    <div className="ml-[7rem] flex h-full min-h-screen flex-col gap-6 bg-light px-20 py-12">
      <UserCategoryHeader
        title="Información y gestión de tu bot"
        icon={PowerButton}
      />
      <section>
        <div className="grid grid-cols-2 gap-16">
          <WelcomeMessage />
          <UserStatistics />
        </div>
      </section>
      <UserMenu />
    </div>
  );
}

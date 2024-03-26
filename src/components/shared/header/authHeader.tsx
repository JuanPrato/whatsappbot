import { RiRobot2Fill } from "react-icons/ri";
import { PiTableFill } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { FaImages } from "react-icons/fa";
import { HeaderIcon } from "./HeaderIcon";
import { logoutAction } from "@/common/auth/actions";
import Link from "next/link";

export default function AuthHeader({ route }: { route: string }) {
  return (
    <header className="absolute left-0 top-0 flex h-screen w-28 flex-col items-center bg-light p-3 shadow-standard">
      <div className="w-24 border-b border-text border-opacity-30 pb-3">
        <img src="/LOGO.png" alt="logo" />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-between py-3">
        <div className="flex flex-col gap-4">
          <HeaderIcon
            Icon={RiRobot2Fill}
            isActive={route.includes("dashboard")}
            as={Link}
            properties={{ href: "/dashboard" }}
          />
          <HeaderIcon
            Icon={PiTableFill}
            isActive={route.includes("data")}
            as={Link}
            properties={{ href: "/dashboard" }}
          />
          <HeaderIcon
            Icon={FaImages}
            isActive={route.includes("images")}
            as={Link}
            properties={{ href: "/images" }}
          />
        </div>
        <HeaderIcon
          Icon={RxAvatar}
          as={"button"}
          properties={{
            onClick: async () => await logoutAction(),
          }}
        />
      </div>
    </header>
  );
}

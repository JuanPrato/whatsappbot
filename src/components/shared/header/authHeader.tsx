import { RiRobot2Fill } from "react-icons/ri";
import { PiTableFill } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { FaImages } from "react-icons/fa";
import { HeaderIcon } from "./HeaderIcon";

export default function AuthHeader() {
  return (
    <header className="shadow-standard flex h-screen w-28 flex-col items-center bg-light p-3">
      <div className="w-24 border-b border-text border-opacity-30 pb-3">
        <img src="/LOGO.png" alt="logo" />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-between py-3">
        <div className="flex flex-col gap-4">
          <HeaderIcon Icon={RiRobot2Fill} isActive={true} />
          <HeaderIcon Icon={PiTableFill} />
          <HeaderIcon Icon={FaImages} />
        </div>
        <HeaderIcon Icon={RxAvatar} />
      </div>
    </header>
  );
}

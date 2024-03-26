import { UserCategoryHeader } from "@/components/shared/userCategoryHeader";
import { FaCloudUploadAlt } from "react-icons/fa";

function UpdateImageIcon() {
  return (
    <button className={"h-16 w-16 rounded-lg bg-text p-3 active:scale-95"}>
      <FaCloudUploadAlt className="h-full w-full text-primary shadow-primary-dark drop-shadow-button" />
    </button>
  );
}

export default function ImagesPage() {
  return (
    <div className="ml-[7rem] flex h-full min-h-screen flex-col gap-6 bg-light px-20 py-12">
      <UserCategoryHeader
        title="Gestiona tus imágenes"
        icon={UpdateImageIcon}
      />
    </div>
  );
}

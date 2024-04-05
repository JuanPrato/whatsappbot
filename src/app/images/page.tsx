import { Card } from "@/components/images/card";
import { UploadImageButton } from "@/components/images/uploadImageButton";
import { UserCategoryHeader } from "@/components/shared/userCategoryHeader";
import { Bot } from "@/models";
import dayjs from "dayjs";

export default async function ImagesPage() {
  const images = await Bot.getBotImagesGroupByDay("+14155238886");

  return (
    <div className="ml-[7rem] flex h-full min-h-screen flex-col gap-6 bg-light px-20 py-12">
      <UserCategoryHeader
        title="Gestiona tus imágenes"
        icon={() => <UploadImageButton phone="+14155238886" />}
      />
      <section className="w-full grow rounded-lg bg-dark p-5">
        {/* <h3 className="">Tus fotos</h3> */}
        {images.map((day, index) => (
          <div key={index}>
            <h4 className="border-b border-light border-opacity-40 pb-3 text-lg text-light">
              {dayjs(day.date).format("DD-MM-YYYY")}
            </h4>
            <ul className="flex w-full gap-5 py-3">
              {day.pictures.map((picture) => (
                <Card picture={picture} key={picture.id} />
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

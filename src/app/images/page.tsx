import { UserCategoryHeader } from "@/components/shared/userCategoryHeader";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const PICTURES = [
  {
    date: new Date(2024, 3, 26),
    pictures: [
      {
        id: "1",
        description: "Precios",
        url: "https://www.shutterstock.com/image-vector/hand-businessman-who-took-queue-260nw-1978680587.jpg",
      },
      {
        id: "2",
        description: "Horarios",
        url: "https://www.shutterstock.com/image-vector/hand-businessman-who-took-queue-260nw-1978680587.jpg",
      },
    ],
  },
  {
    date: new Date(2024, 3, 25),
    pictures: [
      {
        id: "3",
        description: "Novedades",
        url: "https://www.shutterstock.com/image-vector/hand-businessman-who-took-queue-260nw-1978680587.jpg",
      },
      {
        id: "4",
        description: "Ofertas",
        url: "https://www.shutterstock.com/image-vector/hand-businessman-who-took-queue-260nw-1978680587.jpg",
      },
      {
        id: "5",
        description: "Más precios",
        url: "https://www.shutterstock.com/image-vector/hand-businessman-who-took-queue-260nw-1978680587.jpg",
      },
    ],
  },
];

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
      <section className="bg-dark w-full grow rounded-lg p-5">
        {/* <h3 className="">Tus fotos</h3> */}
        {PICTURES.map((day, index) => (
          <div key={index}>
            <h4 className="border-b border-light border-opacity-40 pb-3 text-lg text-light">
              {`${day.date.getDay()}-${day.date.getMonth()}-${day.date.getFullYear()}`}
            </h4>
            <ul className="flex w-full gap-5 py-3">
              {day.pictures.map((picture) => (
                <li
                  key={picture.id}
                  className="relative h-auto w-[200px] overflow-hidden rounded-lg"
                >
                  <FaTrash className="text-danger absolute right-2 top-2 z-10 size-[25px] transition-transform hover:scale-105" />
                  <img
                    src={picture.url}
                    alt={`Imagen subida`}
                    className="mask-image-linear aspect-square"
                  />
                  <h3 className="absolute bottom-2 left-2 text-light">
                    {picture.description}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

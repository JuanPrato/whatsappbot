import {
  ButtonInput,
  EmailInput,
  PasswordInput,
} from "@/components/shared/input";

export default function LoginPage() {
  return (
    <section className="bg-text flex h-[calc(100vh-7rem)] w-full items-center px-[15%]">
      <div className="flex w-full flex-col items-start justify-center gap-5">
        <h2 className="text-text-neg text-3xl font-medium">
          Ingresa para gestionar tu bot
        </h2>
        <form className="flex w-full flex-col gap-5">
          <EmailInput label="Email" />
          <PasswordInput label="Contraseña" />
          <ButtonInput label="Ingresar" />
        </form>
      </div>
      <div className="flex w-full justify-center overflow-hidden">
        <img
          src="./LOGIN_ROBOT.png"
          alt="robot image"
          className="max-h-full w-auto"
        />
      </div>
    </section>
  );
}

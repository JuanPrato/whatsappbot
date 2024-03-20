import {
  ButtonInput,
  EmailInput,
  PasswordInput,
  PhoneInput,
  TextInput,
} from "@/components/shared/input";

export default function RegisterPage() {
  return (
    <section className="flex h-[calc(100vh-7rem)] w-full items-center px-[15%]">
      <div className="flex w-full justify-center overflow-hidden">
        <img
          src="./REGISTER_ROBOT.png"
          alt="robot image"
          className="max-h-full w-auto"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-5">
        <h2 className="text-3xl font-medium text-text">
          Crea tu cuenta y comienza a automatizar
        </h2>
        <form className="flex w-full flex-col gap-5">
          <TextInput label="Nombre completo" />
          <EmailInput label="Email" />
          <div className="flex w-full gap-5">
            <PasswordInput label="Contraseña" />
            <PhoneInput label="Teléfono" />
          </div>
          <ButtonInput label="Registrarme" />
        </form>
      </div>
    </section>
  );
}

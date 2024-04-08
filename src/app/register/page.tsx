import { register } from "@/common/user/actions";
import {
  ButtonInput,
  EmailInput,
  PasswordInput,
  PhoneInput,
  TextInput,
} from "@/components/shared/input";
import { ButtonInputWithPending } from "@/components/shared/input.client";

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
        <h2 className="max-w-[500px] text-3xl font-medium text-text">
          Crea tu cuenta y comienza a automatizar
        </h2>
        <form
          action={register}
          className="flex w-full max-w-[500px] flex-col gap-5"
        >
          <TextInput label="Nombre completo" name="name" />
          <EmailInput label="Email" name="email" />
          <div className="flex w-full gap-5">
            <PasswordInput label="Contraseña" name="password" />
            <PhoneInput label="Teléfono" name="phone" />
          </div>
          <ButtonInputWithPending label="Registrarme" type="submit" />
        </form>
      </div>
    </section>
  );
}

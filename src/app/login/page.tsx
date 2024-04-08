import { login } from "@/common/auth/actions";
import {
  ButtonInput,
  EmailInput,
  PasswordInput,
} from "@/components/shared/input";

export default function LoginPage() {
  return (
    <section className="flex h-[calc(100vh-7rem)] w-full items-center bg-text px-[15%]">
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-[500px] flex-col gap-5 rounded-lg bg-light p-5">
          <h2 className="text-3xl font-medium text-text">
            Ingresa para gestionar tu bot
          </h2>
          <form className="flex w-full flex-col gap-5" action={login}>
            <EmailInput label="Email" name="email" />
            <PasswordInput label="Contraseña" name="password" />
            <ButtonInput label="Ingresar" type="submit" />
          </form>
        </div>
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

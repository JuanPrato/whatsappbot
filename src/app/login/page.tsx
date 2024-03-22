import { login } from "@/auth/lib";
import {
  ButtonInput,
  EmailInput,
  PasswordInput,
} from "@/components/shared/input";
import { redirect } from "next/navigation";

export default function LoginPage() {
  async function onSubmit(formData: FormData) {
    "use server";
    await login(formData);
    redirect("/dashboard");
  }

  return (
    <section className="flex h-[calc(100vh-7rem)] w-full items-center bg-text px-[15%]">
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-[500px] flex-col gap-5 rounded-lg bg-light p-5">
          <h2 className="text-3xl font-medium text-text">
            Ingresa para gestionar tu bot
          </h2>
          <form className="flex w-full flex-col gap-5" action={onSubmit}>
            <EmailInput label="Email" />
            <PasswordInput label="Contraseña" />
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

"use client";

import { useFormState } from "react-dom";
import { TextInput, ButtonInput, HiddenInput } from "../shared/input";
import { Box } from "./box";
import { updateWelcomeMessage } from "@/app/dashboard/actions";

interface Props {
  welcomeMessage: string | null;
  phone: string;
}

export default function WelcomeMessage(props: Props) {
  const [state, formAction] = useFormState(updateWelcomeMessage, null);

  return (
    <Box
      title="Define el mensaje de bienvenida"
      as="form"
      properties={{
        action: formAction,
      }}
    >
      <TextInput
        placeholder="Bienvenido a la tienda virtual"
        inputClassName="bg-light"
        name="message"
        value={props.welcomeMessage || ""}
        error={state?.errors?.message}
        success={state?.result}
      />
      <HiddenInput value={props.phone} name="phone" />
      <ButtonInput
        label="Guardar"
        inputClassName="text-light font-semibold w-"
        type="submit"
      />
    </Box>
  );
}

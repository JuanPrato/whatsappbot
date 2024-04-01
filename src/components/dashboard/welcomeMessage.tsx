import { TextInput, ButtonInput } from "../shared/input";
import { Box } from "./box";

interface Props {
  welcomeMessage: string | null;
}

export default function WelcomeMessage(props: Props) {
  return (
    <Box title="Define el mensaje de bienvenida">
      <TextInput
        placeholder="Bienvenido a la tienda virtual"
        inputClassName="bg-light"
        value={props.welcomeMessage || ""}
      />
      <ButtonInput
        label="Guardar"
        inputClassName="text-light font-semibold w-"
      />
    </Box>
  );
}

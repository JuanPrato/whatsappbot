import { TextInput, ButtonInput } from "../shared/input";
import { Box } from "./box";

export default function WelcomeMessage() {
  return (
    <Box title="Define el mensaje de bienvenida">
      <TextInput
        placeholder="Bienvenido a la tienda virtual"
        inputClassName="bg-light"
      />
      <ButtonInput
        label="Guardar"
        inputClassName="text-light font-semibold w-"
      />
    </Box>
  );
}

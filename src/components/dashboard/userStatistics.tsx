import { BiConversation } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";
import { RiUserVoiceFill } from "react-icons/ri";
import { TextInput, ButtonInput } from "../shared/input";
import { Box } from "./box";
import Statistic from "./statistic";

export default function UserStatistics() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-16">
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
        <Box title="Datos sobre el ultimo mes">
          <Statistic
            icon={RiUserVoiceFill}
            title="Interacciones nuevas"
            value={130}
          />
          <Statistic icon={BiConversation} title="Conversaciones" value={70} />
          <Statistic icon={FaRunning} title="Reencuentros" value={50} />
        </Box>
      </div>
    </section>
  );
}

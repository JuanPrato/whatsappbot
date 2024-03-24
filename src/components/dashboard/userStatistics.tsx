import { BiConversation } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";
import { RiUserVoiceFill } from "react-icons/ri";
import { TextInput, ButtonInput } from "../shared/input";
import { Box } from "./box";
import Statistic from "./statistic";

export default function UserStatistics() {
  return (
    <Box title="Datos sobre el ultimo mes">
      <Statistic
        icon={RiUserVoiceFill}
        title="Interacciones nuevas"
        value={130}
      />
      <Statistic icon={BiConversation} title="Conversaciones" value={70} />
      <Statistic icon={FaRunning} title="Reencuentros" value={50} />
    </Box>
  );
}

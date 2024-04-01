import { IncomingMessage } from "@/common/types";

export async function extractMessageInformationFromRequest(req: Request) {
  const formData = await req.formData();
  return {
    userPhone: formData.get("To")?.slice(9) as string,
    senderPhone: formData.get("From")?.slice(9) as string,
    commandTitle: formData.get("Body") as string,
  };
}

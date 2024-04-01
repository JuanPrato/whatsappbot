import { Request } from "express";
import { IncomingMessage } from "types";

export function extractMessageInformationFromRequest(
  req: Request<{}, {}, IncomingMessage>
) {
  return {
    userPhone: req.body.To.slice(9),
    senderPhone: req.body.From.slice(9),
    commandTitle: req.body.Body,
  };
}

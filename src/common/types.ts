export type Session = {
  user: User;
  expires: Date;
};

export type User = {
  email: string;
  name: string;
};

export interface IncomingMessage {
  SmsMessageSid: string;
  NumMedia: string;
  ProfileName: string;
  MessageType: string;
  SmsSid: string;
  WaId: string;
  SmsStatus: string;
  Body: string;
  To: string;
  NumSegments: string;
  ReferralNumMedia: string;
  MessageSid: string;
  AccountSid: string;
  From: string;
  ApiVersion: string;
}

export interface Message {
  id: number;
  from: string;
  message: string | null;
  timestamp: Date;
}

export interface Command {
  id: number;
  title: string;
  reply: string;
  images: Image[];
}

export interface Image {
  id: number;
  description: string;
  url: string;
}

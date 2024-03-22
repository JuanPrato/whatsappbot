import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header/header";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WHATSAPPBOT",
  description: "Automatización a tu alcance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "relative m-auto w-screen max-w-[1920px] scroll-smooth " +
          fredoka.className
        }
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

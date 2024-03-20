import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";

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
      <body className={"relative w-screen scroll-smooth " + fredoka.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

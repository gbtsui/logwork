import type { Metadata } from "next";
import {Atkinson_Hyperlegible} from "next/font/google";
import "./globals.css";
import "./global_icons.css"
import {NextFontWithVariable} from "next/dist/compiled/@next/font";

const atkinsonHyperlegible: NextFontWithVariable = Atkinson_Hyperlegible({
    weight: "400",
    variable: "--font-atkinson-hyperlegible",
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "logwork",
  description: "small task management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${atkinsonHyperlegible.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

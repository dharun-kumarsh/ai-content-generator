import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "AI Content Generator | FreeBird App",
  description: "Created by FreeBird Apps",
  icons: "/main.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}

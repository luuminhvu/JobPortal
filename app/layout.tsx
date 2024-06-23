import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Home/Navbar";
import ClientProvider from "./components/Hoc/ClientProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find Jobs",
  description: "Find your dream job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClientProvider>
  );
}

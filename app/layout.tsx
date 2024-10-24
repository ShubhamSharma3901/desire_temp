import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Desire Energies Pvt. Ltd",
    template: " %s | Desire Energies Pvt. Ltd",
  },
  description: `Desire Energy Solutions Pvt Ltd, headquartered in Jaipur, is a
  nationally acclaimed tech-driven water management company. It
  specializes in IoT, AI, and renewable energy solutions for public
  water infrastructure projects across India.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo Board",
  description: "Project Management Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

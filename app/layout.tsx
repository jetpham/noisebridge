import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noisebridge",
  description: "Noisebridge",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  other: {
    "apple-mobile-web-app-title": "Noisebridge",
  },
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

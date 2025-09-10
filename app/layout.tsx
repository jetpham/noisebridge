import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://noisebridge.net' : 'http://localhost:3000'),
  title: "Noisebridge",
  description: "Noisebridge",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    images: [
      {
        url: "<generated>",
        type: "<generated>",
        width: "<generated>",
        height: "<generated>",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "<generated>",
        type: "<generated>",
        width: "<generated>",
        height: "<generated>",
      },
    ],
  },
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

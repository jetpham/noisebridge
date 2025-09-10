import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://noisebridge.jetpham.com' : 'http://localhost:3000'),
  title: "Noisebridge",
  description: "ANSI art of Noisebridge",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noisebridge",
    description: "ANSI art of Noisebridge",
    images: [
      {
        url: "/twitter-image.png",
        type: "image/png",
        width: 1200,
        height: 630,
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

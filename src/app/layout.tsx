import type { Metadata, Viewport } from "next";
import "./globals.css";
// import Swap from "@/components/Swap";

export const metadata: Metadata = {
  title: "SJSU AI tool kit",
  description: "Chat with SJSU AI tool kit",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://www.sjsu.edu/",
    title: "SJSU AI tool kit",
    description: "Chat with SJSU AI tool kit",
  },
};
export const viewport: Viewport = {
  themeColor: "#5261ea",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Swap /> */}
        {children}
      </body>
    </html>
  );
}

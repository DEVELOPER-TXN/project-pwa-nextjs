/* METADATA | [S.E.O] Search Engine Optimization */
import type { Metadata } from "next";
/* GOOGLE FONTS | Optimized Fonts */
import { roboto, nunito } from "./ui/fonts";
/* STYLESHEET | Global/Root */
import "@/styles/globals.scss";

/* METADATA TAGS | [S.E.O] */
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "TEMPLATE PWA Next.js",
    template: "%s | TEMPLATE PWA Next.js",
  },
  description: "PWA Template | Built w/ Next.js Framework",
  openGraph: {
    title: "TEMPLATE PWA Next.js",
    description: "PWA Template | Built w/ Next.js Framework",
    url: "http://localhost:3000",
    siteName: "TEMPLATE PWA Next.js",
    locale: "en_UK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}

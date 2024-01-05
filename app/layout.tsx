import "@/styles/globals.css";

import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import StateProvider from "@/lib/Providers";
import Footer from "@/components/Footer";
import LocalFont from "next/font/local";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};
const arlon = LocalFont({
  src: [
    {
      path: "../public/fonts/ArlonSemiBold-DEMO.otf",
      weight: "600",
    },
  ],
  variable: "--arlon",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateProvider>
      <html lang="en" className={`${arlon.variable}`} suppressHydrationWarning>
        <head />
        <body
          className={clsx(
            " bg-[#EEEFF0] font-merry   min-h-screen dark:bg-background font-sans h-full",
            fontSans.variable
          )}
        >
          <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            <div className="relative flex flex-col ">
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
    </StateProvider>
  );
}

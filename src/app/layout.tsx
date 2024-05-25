import "~/styles/globals.css";

import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Footer from "~/components/footer";
import Header from "~/components/header";
import LineTabs from "~/components/linetabs";
import Providers from "~/components/providers";
import { ThemeToggle } from "~/components/theme-toggle";

const font = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milind's Portfolio",
  description: "Portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <Providers>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ThemeToggle className="float-right p-4" />
            <Header />
            <LineTabs>{children}</LineTabs>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import "~/styles/globals.css";

import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Footer from "~/components/footer";
import Header from "~/components/header";
import LineTabs from "~/components/line-tabs";
import Providers from "~/components/providers";
// import { ThemeToggle } from "~/components/theme-toggle";

const font = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milind's Portfolio",
  description: "Portfolio built with Next.js and Tailwind CSS",
  metadataBase: new URL("https://milindmishra.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/og-image.png",
  },
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
          {/* <ThemeToggle className="fixed right-4 top-4 z-50" /> */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Header />
            <LineTabs>{children}</LineTabs>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

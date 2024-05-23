import "~/styles/globals.css";

import { Work_Sans } from "next/font/google";
import LineTabs from "~/components/linetabs";
import Hero from "~/components/header/hero";

const font = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
          <LineTabs>{children}</LineTabs>
        </div>
      </body>
    </html>
  );
}

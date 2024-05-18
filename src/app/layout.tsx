import "~/styles/globals.css";

import { Work_Sans } from "next/font/google";

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
          <div className="mx-auto max-w-3xl">{children}</div>
        </div>
      </body>
    </html>
  );
}

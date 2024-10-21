import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: "Allen John",
  description: "Personal website of Allen John",
  icons: {
    icon: "/allen.png" 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-mono bg-neutral-950`}
      >
        {children}
      </body>
    </html>
  );
}

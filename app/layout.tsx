import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allen John",
  description: "Personal website of Allen John",
  icons: {
    icon: "/allen.png" 
  }
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '400', '400'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-neutral-950`}
      >
        {children}
      </body>
    </html>
  );
}

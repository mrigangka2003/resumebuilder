import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: {
    template:"%s -AI sass Resume Builder",
    absolute:"AI resume Builder"
  },
  description: "Empowering Your Career Journey with AI-Driven Resume Crafting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}

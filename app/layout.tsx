import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEO Automation Tool | Wednesday Solutions",
  description:
    "Your entire SEO pipeline, automated. From keyword research to published blog post. Built for founders and small marketing teams.",
  openGraph: {
    title: "SEO Automation Tool | Wednesday Solutions",
    description:
      "Your entire SEO pipeline, automated. From keyword research to published blog post.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-dark text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

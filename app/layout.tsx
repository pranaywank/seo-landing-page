import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEO Automation Tool | Wednesday Solution",
  description: "One Slack command. 30 SEO-optimized blogs published automatically. Keyword research, content writing, images, internal links, and CMS publishing \u2014 fully automated.",
  openGraph: {
    title: "SEO Automation Tool | Wednesday Solution",
    description: "We replaced our SEO agency with one Slack command. Now you can too.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

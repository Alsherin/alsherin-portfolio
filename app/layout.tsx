import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alsherin Rajan | Product Manager Portfolio",

  description:
    "Product Manager portfolio showcasing AI products, market research, demand generation strategies and product thinking.",

  openGraph: {
    title: "Alsherin Rajan | Product Manager Portfolio",

    description:
      "AI products, market research, GTM strategy and product thinking.",

    url: "https://alsherin-portfolio.vercel.app",

    siteName: "Alsherin Rajan",

    type: "website",
  },

  icons: {
    icon: "/favicon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={jetbrains.className}>
        {children}
      </body>
    </html>
  );
}
import "./globals.css";

import type { Metadata } from "next";
import { Dela_Gothic_One, Poppins } from "next/font/google";

import { CookieConsent } from "@/components/cookie-consent";
import { Providers } from "@/providers/providers";

const heading = Dela_Gothic_One({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NX Studio Boilerplate",
  description:
    "Created with Next.js v15, TailwindCSS v4, Husky and Lint-staged, shadcn-ui, and more.",
  keywords: ["template", "next.js", "tailwindcss", "typescript"],
  icons: [
    {
      url: "favicon/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "favicon/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "favicon/site.webmanifest",
      url: "favicon/site.webmanifest",
    },
    {
      rel: "mask-icon",
      color: "#000000",
      href: "favicon/safari-pinned-tab.svg",
      url: "favicon/safari-pinned-tab.svg",
    },
  ],
  openGraph: {
    title: "NX Studio Boilerplate",
    description:
      "Created with Next.js v15, TailwindCSS v4, Husky and Lint-staged, shadcn-ui, and more.",
    type: "website",
    locale: "pt_BR",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "NX Studio Boilerplate",
    images: [`${process.env.NEXT_PUBLIC_URL}/thumb.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <Providers>
          <CookieConsent />
          {children}
        </Providers>
      </body>
    </html>
  );
}

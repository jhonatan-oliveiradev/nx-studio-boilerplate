"use client";

import { Suspense } from "react";

import Loading from "@/app/loading";
import GoogleAnalytics from "@/components/google-analytics";
import { BackToTop } from "@/components/shared/back-to-top";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { ThemeProvider } from "@/components/theme-provider";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <GoogleAnalytics />
        <BackToTop />
        <WhatsAppButton />
        <>{children}</>
      </ThemeProvider>
    </Suspense>
  );
}

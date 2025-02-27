"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const COOKIE_NAME = "cookies_default";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_NAME);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_NAME, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_NAME, "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.5 }}
          className="bg-secondary fixed right-0 bottom-0 left-0 z-50 max-w-full rounded-tl-3xl rounded-tr-3xl px-4 py-8 shadow-lg md:px-6"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
            <div>
              <Image src="/cookie.svg" alt="Cookie" width={100} height={100} />
            </div>
            <p className="text-sm text-white md:text-lg">
              Utilizamos cookies para otimizar sua experiência de navegação,
              personalizar conteúdos e analisar o tráfego do site. Ao continuar,
              você concorda com nossa{" "}
              <Link
                href="/politica-de-cookies"
                className="text-primary underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
            <div className="flex w-full flex-col gap-4">
              <Button
                onClick={handleAccept}
                className="bg-primary hover:text-primary w-full font-medium hover:bg-white md:w-fit"
              >
                Aceitar
              </Button>
              <Button
                variant="outline"
                onClick={handleDecline}
                className="hover:text-primary w-full bg-transparent font-medium text-white hover:bg-white md:w-fit"
              >
                Recusar
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

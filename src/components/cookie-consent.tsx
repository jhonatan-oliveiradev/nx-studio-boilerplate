"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const COOKIE_NAME = "cookie_consent";

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

  if (!isVisible) return null;

  return (
    <div className="bg-muted-foreground fixed right-4 bottom-4 left-4 max-w-md rounded-lg p-4 shadow-lg md:right-8 md:left-auto">
      <p className="text-sm">
        Usamos cookies para melhorar sua experiência. Ao continuar, você aceita
        nossa{" "}
        <a href="/politica-de-cookies" className="text-primary underline">
          política de cookies
        </a>
        .
      </p>
      <div className="mt-3 flex justify-end">
        <Button
          onClick={handleAccept}
          className="bg-primary hover:bg-secondary"
        >
          Aceitar
        </Button>
      </div>
    </div>
  );
};

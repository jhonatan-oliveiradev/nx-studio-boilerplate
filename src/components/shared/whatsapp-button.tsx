"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "../ui/button";

export const WhatsAppButton = () => {
  const [show, setShow] = useState(false);

  const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.open(`${WHATSAPP_URL}`, "_blank");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
          className="fixed right-4 bottom-4 z-20"
        >
          <Button
            onClick={handleClick}
            className="h-fit w-fit rounded-full bg-transparent p-0 hover:bg-transparent"
          >
            <Image
              src="/whatsapp-icon.svg"
              alt="Ícone: WhatsApp"
              width={64}
              height={64}
            />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

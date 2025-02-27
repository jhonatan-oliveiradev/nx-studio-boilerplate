"use client";

import { MoveUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "../ui/button";

export const BackToTop = () => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true);
    if (show && window.scrollY <= 500) setShow(false);
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
          className="fixed bottom-4 left-4 z-20 w-fit"
        >
          <Button
            onClick={scrollToTop}
            className="hover:bg-secondary h-fit rounded-full p-4 font-bold shadow-md transition-all hover:text-black"
          >
            <MoveUp className="size-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

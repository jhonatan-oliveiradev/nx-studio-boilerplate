"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "/services" },
  { name: "Blog", href: "#blog" },
  { name: "Carreiras", href: "/careers" },
  { name: "Contato", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Função para rolar até a seção
  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      // Se estamos na Home, rolar direto para a seção
      if (pathname === "/") {
        const section = document.querySelector(href);
        section?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Se não estamos na Home, redirecionar para a Home e rolar automaticamente
        localStorage.setItem("scrollTo", href);
        router.push("/");
      }
    } else {
      // Se for uma página normal, apenas navegar
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  // Verifica se há uma seção para rolar ao carregar a Home
  useEffect(() => {
    const scrollTo = localStorage.getItem("scrollTo");
    if (scrollTo && pathname === "/") {
      setTimeout(() => {
        const section = document.querySelector(scrollTo);
        section?.scrollIntoView({ behavior: "smooth" });
        localStorage.removeItem("scrollTo");
      }, 300);
    }
  }, [pathname]);

  return (
    <header className="flex w-full max-w-7xl items-center justify-between py-8">
      <Link href="/">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/nx-logo-color.svg"
            alt="Logotipo: NX Studio."
            width={132}
            height={24}
            className="object-contain"
            priority
          />
        </motion.div>
      </Link>

      {/* Menu Desktop */}
      <nav className="hidden items-center gap-8 text-white md:flex">
        <ul className="flex justify-center gap-8">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;

            return (
              <motion.li
                key={`${item.name}-${item.href}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-lg"
              >
                <button
                  className={`hover:text-primary transition-all ${
                    isActive ? "text-secondary" : ""
                  }`}
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.name}
                </button>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Botão de Menu Mobile */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ scale: 0.9 }}
        className="z-50 text-white md:hidden"
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <XIcon className="size-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MenuIcon className="size-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/90 backdrop-blur-lg"
          >
            <nav className="flex flex-col items-center gap-6">
              <ul className="flex flex-col items-center gap-6">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li
                      key={`mobile-item-${item.href}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: i * 0.5, duration: 0.8 }}
                      className="text-lg font-medium text-white uppercase"
                    >
                      <button
                        className={`hover:text-primary transition-all ${
                          isActive ? "text-secondary" : ""
                        }`}
                        onClick={() => handleNavigation(item.href)}
                      >
                        {item.name}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

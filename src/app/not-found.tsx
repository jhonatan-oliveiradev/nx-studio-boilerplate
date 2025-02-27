"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/header";
import { DefaultContainer } from "@/components/shared/default-container";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const dotsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <motion.div
      className="font-body flex h-[80vh] flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <DefaultContainer>
        <Header />
      </DefaultContainer>
      <div className="relative h-full">
        {/* Círculo 1 (topo esquerdo) */}
        <motion.div
          variants={circleVariants}
          className="absolute top-0 left-0 -z-10 hidden h-auto w-full max-w-[196px] object-contain lg:block"
        >
          <Image
            src="/images/shape-circle-1.svg"
            alt="objeto circular"
            width={196}
            height={196}
          />
        </motion.div>

        {/* Círculo 2 (bottom direito) */}
        <motion.div
          variants={circleVariants}
          className="absolute right-0 bottom-0 -z-10 hidden h-auto w-full max-w-[156px] object-contain lg:block"
        >
          <Image
            src="/images/shape-circle-2.svg"
            alt="objeto circular"
            width={156}
            height={156}
          />
        </motion.div>

        {/* Pontos (bottom esquerdo) */}
        <motion.div
          variants={dotsVariants}
          className="absolute bottom-20 left-20 -z-10 hidden h-auto w-full max-w-[128px] object-contain lg:block"
        >
          <Image
            src="/images/shape-dots.svg"
            alt="objeto circular"
            width={128}
            height={128}
          />
        </motion.div>

        {/* Pontos (topo direito) */}
        <motion.div
          variants={dotsVariants}
          className="absolute top-20 right-20 -z-10 hidden h-auto w-full max-w-[128px] object-contain lg:block"
        >
          <Image
            src="/images/shape-dots.svg"
            alt="objeto circular"
            width={128}
            height={128}
          />
        </motion.div>

        {/* Conteúdo principal */}
        <DefaultContainer className="h-full flex-col items-center justify-center">
          <motion.h1
            className="font-heading flex flex-col items-center justify-center text-9xl"
            variants={itemVariants}
          >
            <span className="text-8xl md:text-9xl">404</span>
            <span className="text-base uppercase md:text-xl">
              Página não encontrada
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground mt-4 max-w-96 text-center text-xs"
            variants={itemVariants}
          >
            Parece que você encontrou um caminho que ainda não desenhamos. Mas
            não se preocupe,{" "}
            <strong className="text-primary">
              sempre há uma boa ideia esperando para ser descoberta
            </strong>
            ! Que tal voltar para a página inicial e explorar novas
            possibilidades?
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col items-center justify-center gap-4 md:flex-row"
            variants={itemVariants}
          >
            <Link href="/contact">
              <Button className="before:bg-secondary relative w-full overflow-hidden before:absolute before:inset-0 before:-left-full before:h-full before:w-full before:transition-all before:duration-300 hover:before:left-0 active:translate-x-1 active:translate-y-1 md:w-fit">
                <span className="relative z-10">Entrar em contato</span>
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="before:bg-secondary hover:border-secondary relative w-full overflow-hidden before:absolute before:inset-0 before:-left-full before:h-full before:w-full before:transition-all before:duration-300 hover:before:left-0 active:translate-x-1 active:translate-y-1 md:w-fit"
              >
                <span className="relative z-10">Voltar para a Home</span>
              </Button>
            </Link>
          </motion.div>
        </DefaultContainer>
      </div>
    </motion.div>
  );
}

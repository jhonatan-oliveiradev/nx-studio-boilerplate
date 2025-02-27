"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/header";
import { DefaultContainer } from "@/components/shared/default-container";
import { Button } from "@/components/ui/button";

export default function InternalServerErrorPage() {
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
    hidden: { opacity: 0, rotate: 0 },
    visible: { opacity: 1, rotate: 360, transition: { duration: 1.5 } },
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
        {/* Animações dos círculos e pontos */}
        <motion.div variants={circleVariants}>
          <Image
            src="/images/shape-circle-1.svg"
            alt="objeto circular"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute top-0 left-0 -z-10 hidden h-auto w-full max-w-[196px] object-contain lg:block"
          />
        </motion.div>
        <motion.div variants={circleVariants}>
          <Image
            src="/images/shape-circle-2.svg"
            alt="objeto circular"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute right-0 bottom-0 -z-10 hidden h-auto w-full max-w-[156px] object-contain lg:block"
          />
        </motion.div>
        <motion.div variants={dotsVariants}>
          <Image
            src="/images/shape-dots.svg"
            alt="objeto circular"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute bottom-20 left-20 -z-10 hidden h-auto w-full max-w-[128px] object-contain lg:block"
          />
        </motion.div>
        <motion.div variants={dotsVariants}>
          <Image
            src="/images/shape-dots.svg"
            alt="objeto circular"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute top-20 right-20 -z-10 hidden h-auto w-full max-w-[128px] object-contain lg:block"
          />
        </motion.div>

        {/* Conteúdo principal */}
        <DefaultContainer className="h-full flex-col items-center justify-center">
          <motion.h1
            className="font-heading flex flex-col items-center justify-center text-9xl"
            variants={itemVariants}
          >
            <span className="text-8xl md:text-9xl">500</span>
            <span className="text-base uppercase md:text-xl">
              Erro interno do servidor
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground mt-4 max-w-96 text-center text-xs"
            variants={itemVariants}
          >
            Algo inesperado aconteceu nos bastidores... Mas não se preocupe, até
            os melhores sistemas têm seus momentos! Enquanto resolvemos isso,
            que tal voltar e explorar algo incrível?
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col items-center justify-center gap-4 md:flex-row"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/contact">
                <Button className="before:bg-secondary relative w-full overflow-hidden before:absolute before:inset-0 before:-left-full before:h-full before:w-full before:transition-all before:duration-300 hover:before:left-0 active:translate-x-1 active:translate-y-1 md:w-fit">
                  <span className="relative z-10">Entrar em contato</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/">
                <Button
                  variant="outline"
                  className="before:bg-secondary hover:border-secondary relative w-full overflow-hidden before:absolute before:inset-0 before:-left-full before:h-full before:w-full before:transition-all before:duration-300 hover:before:left-0 active:translate-x-1 active:translate-y-1 md:w-fit"
                >
                  <span className="relative z-10">Voltar para a Home</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </DefaultContainer>
      </div>
    </motion.div>
  );
}

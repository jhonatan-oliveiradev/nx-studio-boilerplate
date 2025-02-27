import { StarIcon } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { DefaultContainer } from "@/components/shared/default-container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto flex h-screen flex-col bg-[url(/background-mobile.jpg)] bg-cover bg-center bg-no-repeat md:bg-[url(/background-desktop.jpg)]">
      <div className="h-screen w-full bg-zinc-900/90">
        <DefaultContainer>
          <Header />
          <div className="flex h-[80vh] w-full max-w-xl flex-col items-center justify-center gap-4">
            <h1 className="font-heading text-6xl">
              Welcome to our Custom Boilerplate!
            </h1>
            <p className="text-muted-foreground">
              This is a custom boilerplate for Next.js v15 with Tailwind CSS v4
              and TypeScript. It includes shadcn-ui for accessible components,
              Lucide React for icons, and Motion for animations. Additionally,
              it features Next Themes for dark mode support, Nodemailer for
              email handling, and utilities like clsx, tailwind-merge, and
              class-variance-authority for optimized styling. ESLint and
              TypeScript ensure code quality and consistency.
            </p>
            <div className="flex w-full items-start gap-8">
              <Button asChild>
                <Link
                  href="https://enex.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Know NX Studio.
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href="https://github.com/jhonatan-oliveradev/nx-studio-boilerplate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Give a star. <StarIcon className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </DefaultContainer>

        <Footer />
      </div>
    </main>
  );
}

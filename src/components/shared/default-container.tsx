import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface DefaultContainerProps {
  children: ReactNode;
  className?: string;
}

export const DefaultContainer = ({
  className,
  children,
}: DefaultContainerProps) => {
  return (
    <div
      className={cn("mx-auto flex w-full max-w-7xl flex-col px-4", className)}
    >
      {children}
    </div>
  );
};

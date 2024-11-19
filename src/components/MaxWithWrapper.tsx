import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

export default function MaxWidthWrapper({
  className,
  children,
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-screen-[1920] w-full h-full px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}

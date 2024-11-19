import LocomotiveScrollWrapper from "@/components/providers/LocomotiveScrollWrapper";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {
  bulgie,
  gilroyMedium,
  helveticaNowDisplayBold,
  helveticaNowDisplayExtraBold,
  helveticaNowDisplayExtraLight,
  helveticaNowDisplaylight,
  helveticaNowDisplayMedium,
  helveticaNowDisplayRegular,
  neuMachinaLight,
  neuMachinaRegular,
  neuMachinaUltraBold,
} from "./fonts/fonts";
import "./globals.css";
import MouseFollower from "@/components/MouseFollower";

export const metadata: Metadata = {
  title: "Karan Sharma",
  description:
    "I am a web developer, creating stunning website with different technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn(
          "relative h-full font-sans antialiased ",
          neuMachinaRegular.variable,
          neuMachinaLight.variable,
          helveticaNowDisplayBold.variable,
          helveticaNowDisplayExtraBold.variable,
          helveticaNowDisplayMedium.variable,
          helveticaNowDisplayRegular.variable,
          helveticaNowDisplaylight.variable,
          helveticaNowDisplayExtraLight.variable,
          gilroyMedium.variable,
          neuMachinaUltraBold.variable,
          bulgie.variable
        )}
      >
        <MouseFollower />
        <LocomotiveScrollWrapper>{children}</LocomotiveScrollWrapper>
      </body>
    </html>
  );
}

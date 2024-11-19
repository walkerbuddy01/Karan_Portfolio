"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function HeroPubOne() {
  const heroPubRef = React.useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(heroPubRef.current, {
      opacity: 0,
      duration: 1.5,
      delay: 1.5,
      ease: "circ.in",
    });
  });

  return (
    <div
      className="absolute left-5 top-[30%] md:top-[30%] w-32 sm:w-60 text-lg sm:text-2xl font-helveticaNowDisplayMedium leading-none uppercase "
      data-scroll
      data-scroll-speed="0.1"
    >
      <p ref={heroPubRef}>Unleashing boundless creativity for your brand</p>
    </div>
  );
}

export default HeroPubOne;

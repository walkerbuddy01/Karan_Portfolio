"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

function Prism() {
  const prismRef = useRef(null);
  useGSAP(() => {
    gsap.to(prismRef.current, {
      opacity: 1,
      duration: 0.6,
      delay: 0.7,
      ease: "power2.in",
      onComplete: () => {
        gsap.to(prismRef.current, {
          y: -40,
          duration: 2,
          repeat: -1,
          ease: "linear",
          yoyoEase: "linear",
        });
      },
    });
  });
  return (
    <div
      className="w-full h-fit sm:w-[60%] lg:w-[40%]  xl:w-[40%]  sm:pt-24  md:pt-20 lg:pt-0 pt-32 overflow-hidden  "
      data-scroll
      data-scroll-speed="-0.3"
    >
      <Image
        ref={prismRef}
        src="https://ik.imagekit.io/buddycode/Prisma.png?updatedAt=1731399439583"
        alt="Prisma"
        width={400}
        height={400}
        className=" md:scale-[1.2] lg:scale-[.8] sm:scale-[1.2] scale-100 sm:ml-10 ml-[5vw] rotate-12 opacity-0 "
        layout="responsive"
        priority
      />
    </div>
  );
}

export default Prism;

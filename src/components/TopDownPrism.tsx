"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

function TopDownPrism() {
  const topPrismRef = useRef<HTMLDivElement>(null);
  const downPrismRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const prismTrigger = document.querySelector(".prism-trigger");
    gsap.from(topPrismRef.current, {
      top: "-35%",
      left: "10%",
      rotateZ: 12,
      scale: 3.8,
      mixBlendMode: "normal",
      scrollTrigger: {
        trigger: prismTrigger, // Trigger when laptop is in view
        scroller: "body",
        start: "top 60%",
        end: "80% 70%",
        scrub: 2,
      },
      
    });

    gsap.from(downPrismRef.current, {
      top: "-20%",
      right: "0%",
      rotateZ: -12,
      scale: 3,
      mixBlendMode: "normal",
      scrollTrigger: {
        trigger: prismTrigger, // Trigger when laptop is in view
        scroller: "body",
        start: "top 60%",
        end: "80% 70%",
        scrub: 2,
      },
    });
  });
  return (
    <>
      <div
        className=" absolute top-[77%] left-[20%] sm:top-[65%] sm:left-[30%]  scale-[1.3] sm:scale-100   -rotate-45  rounded-3xl w-[9vw] opacity-80 z-10"
        ref={topPrismRef}
      >
        <Image
          src="https://ik.imagekit.io/buddycode/Prisma.png?updatedAt=1731399439583"
          alt="Prisma"
          width={400}
          height={400}
          className=" scale-125 mix-blend-hard-light color-grade"
          layout="responsive"
          priority
        />
      </div>

      <div
        className=" absolute top-[73%] right-[43%] sm:top-[60%] sm:right-[45%] scale-[1.7] sm:scale-100 rotate-30  rounded-3xl w-[7vw] opacity-80 z-10"
        ref={downPrismRef}
      >
        <Image
          src="https://ik.imagekit.io/buddycode/Prisma.png?updatedAt=1731399439583"
          alt="Prisma"
          width={400}
          height={400}
          className=" mix-blend-hard-light color-grade"
          layout="responsive"
          priority
        />
      </div>
    </>
  );
}

export default TopDownPrism;

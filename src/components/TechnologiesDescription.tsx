"use client";
import React, { useRef } from "react";
import TechDescription from "./TechDescription";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TechnologiesDescription() {
  const scrollTriggerHolder = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(document.querySelectorAll(".td"), {
      y: 0,
      rotate: 0,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: scrollTriggerHolder.current,
        scroller: "body",
        start: "top 40%",
        end: "bottom bottom",
        markers: true,
        scrub: 2,
      },
    });
  });

  return (
    <section className="h-full w-full" ref={scrollTriggerHolder}>
      <h3 className="text-[6vw] text-center font-helveticaNowDisplayBold text-white uppercase">
        The technologies we work with
      </h3>

      <div className="h-full w-full flex flex-col justify-center gap-4 py-[2%]">
        <TechDescription
          title="frontend"
          techs={[
            "html",
            "css",
            "js",
            "ts",
            "react",
            "nextjs",
            "shadcn",
            "zod",
            "tailwind",
            "gsap",
          ]}
        />

        <TechDescription
          title="backend"
          techs={[
            "express",
            "nodejs",
            "mongodb",
            "nextjs",
            "prisma",
            "ts",
            "zod",
            "NextAuth",
          ]}
        />

        <TechDescription
          title="extra's "
          techs={[
            "vercel",
            "threejs",
            "docker",
            "git",
            "github",
            "Continous integration",
            "razorpay integration",
          ]}
        />
        <TechDescription
          title="Coming soon"
          techs={["redis", "reactNative", "aws", "web3", "web neural network"]}
        />
      </div>
      
    </section>
  );
}

export default TechnologiesDescription;

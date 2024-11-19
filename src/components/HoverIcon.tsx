"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

export default function HoverIcon({
  src,
  className,
  gsapProperties,
}: {
  src: string;
  className: string;
  gsapProperties: gsap.TweenVars;
}) {
  const hoverImageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(hoverImageRef.current, gsapProperties);
  });

  return (
    <div className={`${className} `} ref={hoverImageRef}>
      <Image
        src={src}
        alt="Group_1"
        width={400}
        height={400}
        className="  sm:scale-125 "
        layout="responsive"
      />
    </div>
  );
}

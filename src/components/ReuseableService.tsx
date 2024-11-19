"use client";

import Image from "next/image";
import HoverIcon from "./HoverIcon";

function ReuseableService({
  title,
  mainImgSrc,
  mainImgAlt,
  HoverIconSrc,
}: {
  title: string;
  mainImgSrc: string;
  mainImgAlt: string;
  HoverIconSrc: string;
}) {
  return (
    <div className="h-[80%] w-[100vw] flex items-center justify-center ">
      <div className="h-[100%] w-[100%] flex justify-center items-center relative ">
        <div>
          <div>

          </div>
          <h3 className="text-[7vw] font-helveticaNowDisplayMedium absolute top-0 uppercase ">
            {title}
          </h3>
        </div>
        <div className="h-1/2 w-[60%]">
          <Image
            src={mainImgSrc}
            alt={mainImgAlt}
            width={400}
            height={400}
            layout="responsive"
            loading="lazy"
            priority={false}
          />
          <HoverIcon
            src={HoverIconSrc}
            className="w-[20%] absolute top-[20%] -rotate-6 right-[8%] color-grade "
            gsapProperties={{
              top: "30%",
              duration: 2,
              repeat: -1,
              yoyoEase: "linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ReuseableService;

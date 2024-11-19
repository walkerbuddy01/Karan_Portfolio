import AnimatedLaptop from "@/components/AnimatedLaptop";
import AnimatedServices from "@/components/AnimatedServices";
import HeroDesc from "@/components/HeroDesc";
import HeroPubOne from "@/components/HeroPubOne";
import HoverImage from "@/components/HoverImage";
import MaxWidthWrapper from "@/components/MaxWithWrapper";
import MouseFollower from "@/components/MouseFollower";
import Naming from "@/components/Naming";
import Navbar from "@/components/Navbar";
import Prism from "@/components/Prism";
import TechDescription from "@/components/TechDescription";
import TechnologiesDescription from "@/components/TechnologiesDescription";
import TopDownPrism from "@/components/TopDownPrism";

export default function Home() {
  return (
    <main className="h-full w-full bg-black relative">
      <MouseFollower />

      {/* first page */}
      <section
        className={`h-full w-full bg-white sm:rounded-b-[5vw] rounded-b-[8vw]  relative z-`}
      >
        <section className="sm:px-4 px-2">
          <Navbar />
        </section>
        <section className="px-4 h-full w-full relative overflow-hidden ">
          <MaxWidthWrapper>
            <div className="h-full w-full sm:flex justify-between ">
              <HeroPubOne />
              <Prism />
              <HeroDesc />
            </div>
          </MaxWidthWrapper>
        </section>
        <section className="h-full w-full relative pb-10 bg-transparent ">
          <Naming />
        </section>
      </section>

      {/* second page */}
      <section className="h-full w-full overflow-hidden">
        {/* Animated  Self Branding Page  */}
        <section className="w-full h-full relative prism-trigger mb-[20vh] ">
          <MaxWidthWrapper>
            <div
              className="text-[7vw] sm:text-[5vw]  leading-none py-36 text-white uppercase font-helveticaNowDisplayMedium  sm:mb-[20vh] overflow-hidden"
              data-scroll
              data-scroll-speed="-0.2"
            >
              <p>discover the</p>
              <p>power of</p>
              <p>Creative Developer</p>
            </div>
            <AnimatedLaptop />
            <TopDownPrism />
          </MaxWidthWrapper>
        </section>
        <AnimatedServices />
      </section>

      <section className="h-full w-full ">
        <TechnologiesDescription />
      </section>
      <section className="h-full w-full">
        <div className="text-[5vw] pl-2 font-helveticaNowDisplayBold uppercase text-white">
          Wants to connect with us
        </div>
        <div className="pl-2">
          <div className="flex justify-center items-center rounded-full w-fit border border-white px-[2vw] py-[1vw] ">
            <a
              href="mailto:karansharma40692@email.com"
              className="w-full overflow-hidden inline-block text-white text-[2vw] font-helveticaNowDisplayBold leading-none uppercase"
            >
              Reach out
            </a>
          </div>
        </div>
        <HoverImage />
      </section>
      <section>
        <p className=" text-[11vw]  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950  to-neutral-800 inset-x-0 select-none uppercase font-helveticaNowDisplayExtraBold">
          karann sharma
        </p>
      </section>
    </main>
  );
}

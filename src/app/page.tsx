import AnimatedLaptop from "@/components/AnimatedLaptop";
import AnimatedService from "@/components/AnimatedService";
import HeroDesc from "@/components/HeroDesc";
import HeroPubOne from "@/components/HeroPubOne";
import MaxWidthWrapper from "@/components/MaxWithWrapper";
import MouseFollower from "@/components/MouseFollower";
import Naming from "@/components/Naming";
import Navbar from "@/components/Navbar";
import Prism from "@/components/Prism";
import TechnologiesDescription from "@/components/TechnologiesDescription";
import TopDownPrism from "@/components/TopDownPrism";
import { cn } from "@/lib/utils";

export default function Home() {
  const services = [
    {
      serialNumber: 1,
      title: "Frontend Development",
      description:
        "I create dynamic, responsive web experiences using GSAP, React, HTML, CSS, JavaScript, TypeScript, and Next.js. From animations to seamless interfaces, I bring ideas to life with modern tools and creativity.",
      color: "bg-purple-400 rounded-t-lg",
    },
    {
      serialNumber: 2,
      title: "Backend Development",
      description:
        "I build robust APIs and databases using Node.js, Express.js, MongoDB, and PostgreSQL. With a focus on security and performance, I deliver efficient solutions for modern web applications.",
      color: "bg-purple-500",
    },
    {
      serialNumber: 3,
      title: "Full-Stack Development",
      description:
        "I combine frontend and backend development to create seamless user experiences. I work closely with clients to understand their needs and deliver exceptional results.",
      color: "bg-purple-600 rounded-b-lg",
    },
  ];
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
        <section className="h-full w-full">
          <h3 className="text-white text-[12vw] sm:text-[8vw] font-helveticaNowDisplayBold uppercase py-2 text-center">
            <span className="text-purple-500">&#x7B;</span>Our Services{" "}
            <span className="text-purple-500">&#125;</span>
          </h3>

          <section className="h-full w-full">
            {services.map((service, index) => (
              <AnimatedService
                key={index}
                serialNumber={service.serialNumber}
                title={service.title}
                description={service.description}
                className={cn(service.color)}
              />
            ))}
          </section>
        </section>
      </section>

      <section className="h-full w-full mt-10 ">
        <TechnologiesDescription />
      </section>
      <section className="h-full w-full my-10 py-5 bg-white rounded-lg">
        <div className="text-[6.5vw] sm:text-[5vw] pl-2 font-helveticaNowDisplayBold uppercase text-black">
          Wants to connect with us
        </div>
        <div className="pl-2">
          <div className="flex justify-center items-center rounded-full w-fit  bg-black p-[3vw] border sm:px-[1vw] sm:py-[1vw] mt-3 ">
            <a
              href="mailto:karansharma40692@email.com"
              className="w-full overflow-hidden inline-block text-white leading-none uppercase"
            >
              <p className=" text-[4vw] sm:text-[1vw] font-helveticaNowDisplayBold">
                reach out
              </p>
            </a>
          </div>
        </div>
        {/* <HoverImage /> */}
      </section>
      <section>
        <p className=" text-[11vw]  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950  to-neutral-800 inset-x-0 select-none uppercase font-helveticaNowDisplayExtraBold">
          karann sharma
        </p>
      </section>
    </main>
  );
}

"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "./Container";
import Image from "next/image";
import BackgroundDesign from "./BackgroundDesign";
import { motion } from "framer-motion";
import logo from "../images/logo.svg";
import Link from "next/link";
import hover3d from "../utils/hover";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnmitedText";
const Hero = () => {
  const [replay, setReplay] = useState(true);
  const hero = useRef(null);
  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  // Placeholder text data, as if from API
  const placeholderText = [
    {
      type: "heading1",
      text: "We distribute our partners products",
    },
    {
      type: "heading2",
      text: "throughout Egypt and open new",
    },
    {
      type: "heading2",
      text: "markets for them By Delivering their",
    },
    {
      type: "heading2",
      text: "products to all locations and opening a new range.",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.045,
      },
    },
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <section
            id="home"
            className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36"
          >
            <FadeIn delay={0.2} direction="right">
              <Container>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                  {/* Right side */}
                  <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                    <div className="mt-[20px]">
                      <FadeIn delay={0.2} direction="down" padding fullWidth>
                        <span className="colst underlined underline-clip  text-[40px] font-roboto font-extrabold text-[#fff]">
                          ElSalam
                        </span>
                        <h3 className="animate-charcter text-[40px] font-roboto font-extrabold">
                          Trade
                        </h3>
                      </FadeIn>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <FadeIn delay={0.4} direction="down" padding fullWidth>
                        <h2 className="agency smd:pt-5  relative text-white font-roboto font-bold  z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                          for Import & commercial Agencies.
                        </h2>
                      </FadeIn>
                    </div>
                  </div>

                  {/* Left side */}
                  <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                    <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
                    <div className="-mx-4 h-[448px] px-9  sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                      <div className="mx-auto flex flex-col justify-center items-center">
                        <motion.div
                          ref={hero}
                          animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],

                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                          }}
                          className="border-0 rounded-full [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32"
                        >
                          <Image
                            src={logo}
                            width={1000}
                            height={1000}
                            alt="hero2"
                            style={{
                              transform: imageHover.transform,
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                    <FadeIn delay={0.2} direction="up" padding fullWidth>
                      <div className=" mt-8 flex flex-wrap items-center gap-x-6 gap-4 flex-col">
                        <motion.div
                          initial="hidden"
                          // animate="visible"
                          animate={replay ? "visible" : "hidden"}
                          variants={container}
                        >
                          <div className="  container text-center text-[25px] font-extrabold font-roboto">
                            {placeholderText.map((item, index) => {
                              return <AnimatedText {...item} key={index} />;
                            })}
                          </div>
                        </motion.div>
                        <Link href="#contact" className="relative ">
                          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
                          <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-[#3359aa] dark:bg-black">
                            Contact Us
                          </span>
                        </Link>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </Container>
            </FadeIn>
          </section>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <section
            id="home"
            className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36"
          >
            <FadeIn delay={0.2} direction="right">
              <Container>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                  {/* Right side */}
                  <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                    <div className="mt-[20px]">
                      <FadeIn delay={0.2} direction="down" padding fullWidth>
                        <span className="colst underlined underline-clip  text-[40px] font-roboto font-extrabold text-[#fff]">
                          ElSalam
                        </span>
                        <h3 className="animate-charcter text-[40px] font-roboto font-extrabold">
                          Trade
                        </h3>
                      </FadeIn>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <FadeIn delay={0.4} direction="down" padding fullWidth>
                        <h2 className="agency smd:pt-5  relative text-white font-roboto font-bold  z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                          for Import & commercial Agencies.
                        </h2>
                      </FadeIn>
                    </div>
                  </div>

                  {/* Left side */}
                  <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                    <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
                    <div className="-mx-4 h-[448px] px-9  sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                      <div className="mx-auto flex flex-col justify-center items-center">
                        <motion.div
                          animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],

                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                          }}
                          className="border-0 rounded-full [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32"
                        >
                          <Image
                            src={logo}
                            width={1000}
                            height={1000}
                            alt="hero3"
                            style={{
                              transform: imageHover.transform,
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                    <FadeIn delay={0.2} direction="up" padding fullWidth>
                      <div className=" mt-8 flex flex-wrap items-center gap-x-6 gap-4 flex-col">
                        <motion.div
                          initial="hidden"
                          // animate="visible"
                          animate={replay ? "visible" : "hidden"}
                          variants={container}
                        >
                          <div className="  container text-center text-[25px] font-extrabold font-roboto">
                            {placeholderText.map((item, index) => {
                              return <AnimatedText {...item} key={index} />;
                            })}
                          </div>
                        </motion.div>
                        <Link href="#contact" className="relative ">
                          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
                          <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-[#3359aa] dark:bg-black">
                            Contact Us
                          </span>
                        </Link>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </Container>
            </FadeIn>
          </section>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide3">
          <section
            id="home"
            className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36"
          >
            <FadeIn delay={0.2} direction="right">
              <Container>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                  {/* Right side */}
                  <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                    <div className="mt-[20px]">
                      <FadeIn delay={0.2} direction="down" padding fullWidth>
                        <span className="colst underlined underline-clip  text-[40px] font-roboto font-extrabold text-[#fff]">
                          ElSalam
                        </span>
                        <h3 className="animate-charcter text-[40px] font-roboto font-extrabold">
                          Trade
                        </h3>
                      </FadeIn>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <FadeIn delay={0.4} direction="down" padding fullWidth>
                        <h2 className="agency smd:pt-5  relative text-white font-roboto font-bold  z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                          for Import & commercial Agencies.
                        </h2>
                      </FadeIn>
                    </div>
                  </div>

                  {/* Left side */}
                  <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                    <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
                    <div className="-mx-4 h-[448px] px-9  sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                      <div className="mx-auto flex flex-col justify-center items-center">
                        <motion.div
                          animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],

                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                          }}
                          className="border-0 rounded-full [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32"
                        >
                          <Image
                            src={logo}
                            width={1000}
                            height={1000}
                            alt="hero2"
                            style={{
                              transform: imageHover.transform,
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                    <FadeIn delay={0.2} direction="up" padding fullWidth>
                      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-4 flex-col">
                        <motion.div
                          initial="hidden"
                          // animate="visible"
                          animate={replay ? "visible" : "hidden"}
                          variants={container}
                        >
                          <div className=" container text-center text-[25px] font-extrabold font-roboto">
                            {placeholderText.map((item, index) => {
                              return <AnimatedText {...item} key={index} />;
                            })}
                          </div>
                        </motion.div>
                        <Link href="#contact" className="relative ">
                          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
                          <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-[#3359aa] dark:bg-black">
                            Contact Us
                          </span>
                        </Link>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </Container>
            </FadeIn>
          </section>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Hero;

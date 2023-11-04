"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import part1 from "../images/part1.jpg";
import part2 from "./../images/part2.jpg";
import part3 from "../images/part3.jpg";
import part4 from "../images/part4.jpg";
import truck from "../images/truck.mp4";
import Image from "next/image";
import FadeIn from "./FadeIn";

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [HoverMe, setHoverMe] = useState(false);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "200px",
    },
  };

  const cardImages = [part4, part2, part1, part3];

  const cardDescriptions = [
    "It is the producing company that entrusted us with publishing and distributing its product throughout Egypt",
    "It arrives at our warehouses equipped to store and distribute the goods and fulfill orders",
    "Our distribution vehicles cover all governorates, the needs of all ordinary merchants and dealers, and we reach new wholesale points, new markets for our partners.",
    "Our representatives will deliver and take all orders to you when you request them, or they will reach you and use the best distribution systems in the Middle East. They have realtime For all our products and offers on your phone with ease and new offers moment by moment",
  ];
  const cardTitle = [
    "company",
    "warehouses ",
    "distribution",
    "representatives",
  ];
  return (
    <div
      id="information"
      className="relative  bg-hero-section bg-no-repeat h-screen bg-center bg-cover "
    >
      <video
        src={truck}
        muted
        autoPlay
        loop
        className="bg-hero-section  "
      ></video>
      <section>
        <div className="absolute inset-0 flex justify-center items-center flex-col ">
          <FadeIn delay={0.2} direction="down" padding fullWidth>
            <div className="max-w-7xl smd:w-[400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="explore font-extrabold text-white">
                How we provide our service
              </h1>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="up" padding fullWidth className>
            <div className="mt-12  smd:mt-0 flex-col flex  md:flex-row  justify-center items-center smd:gap-[3px]   gap-[50px]  ">
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className={`card cursor-pointer h-full bg-cover bg-center rounded-[20px]  ${
                    index === expandedIndex ? "expanded" : ""
                  }`}
                  variants={cardVariants}
                  initial="collapsed"
                  animate={index === expandedIndex ? "expanded" : "collapsed"}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="card-content  h-[350px] w-full flex flex-col justify-end smd:h-[150px]">
                    <div className="flex  flex-col  items-center justify-center h-[300px] smd:h-[50px] ">
                      <Image
                        onClick={() => setHoverMe(true)}
                        src={cardImages[index]}
                        width={300}
                        height={300}
                        alt="cards"
                        className="rounded-full h-[230px] w-[280px] smd:w-[80px] "
                      />
                      <h2 className="text-xl explore font-roboto font-bold text-white text-center ">
                        {cardTitle[index]}
                      </h2>
                    </div>

                    {index === expandedIndex && (
                      <div
                        className={`card-footer rounded-md h-[50%] bg-gray-800 bg-opacity-75  flex flex-col items-center justify-center  `}
                      >
                        {index === expandedIndex && (
                          <div className="w-full h-full font-roboto font-bold filtera text-[#bdbdbc]  ">
                            {cardDescriptions[index]}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default OpenCards;

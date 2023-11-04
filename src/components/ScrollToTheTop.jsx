"use client";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTheTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <FaAngleDoubleUp
          className={`fixed bottom-[15px] right-[20px] h-[40px] w-[40px] rounded-[50%] hover:border-[2px] border-solid border-[#3f6cff]  cursor-pointer hover:bg-[#333] hover: border-[2px] hover:border-solid hover:border-[#333] ${
            "bg-[#0f172a]" ? "bg-[#333]" : " bg-[#fff]"
          }${"text-white" ? "bg-[#fff]" : " bg-[#333]"}`}
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default ScrollToTheTop;

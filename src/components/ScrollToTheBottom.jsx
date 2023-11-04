"use client";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTheBottom = () => {
  const [showScrollBottonButton, setShowScrollBottonButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setShowScrollBottonButton(true);
      } else {
        setShowScrollBottonButton(false);
      }
    });
  }, []);

  const scrollBttom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div>
      {showScrollBottonButton && (
        <FaAngleDoubleDown
          className={`fixed bottom-[15px] left-[20px] h-[40px] w-[40px] rounded-[50%] hover:border-[2px] border-solid border-[#3f6cff]  cursor-pointer hover:bg-[#333] hover: border-[2px] hover:border-solid hover:border-[#333] ${
            "bg-[#0f172a]" ? "bg-[#333]" : " bg-[#fff]"
          }${"text-white" ? "bg-[#fff]" : " bg-[#333]"}`}
          onClick={scrollBttom}
        />
      )}
    </div>
  );
};

export default ScrollToTheBottom;

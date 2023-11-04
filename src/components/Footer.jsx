import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import Contact from "./Contact";
import Image from "next/image";
import logo from "@/images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white " id="contact">
      <div className="flex justify-center items-center smd:flex-col pt-5">
        <div>
          <div className="flex flex-col justify-center items-center">
            <Image src={logo} width={400} height={400} alt="hero" />
            <div>
              <span className="colst underlined underline-clip text-[40px] font-roboto font-extrabold text-[#fff]">
                ElSalam
              </span>
              <h3 className="animate-charcter text-[40px] font-roboto font-extrabold">
                Trade
              </h3>
            </div>
          </div>
          <ItemsContainer />
        </div>
        <Contact />
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>
          All rights reserved © El Salam Trade {new Date().getFullYear()}.
        </span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;

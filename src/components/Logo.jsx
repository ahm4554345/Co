import Link from "next/link";
import clsx from "clsx";
import logo from "@/images/logo.svg";
import Image from "next/image";
const Logo = ({ className, props }) => {
  return (
    <Link href={"#home"} className=" flex justify-center items-center flex-row">
      <h2
        className={clsx(
          "text-3xl font-bold text-gray-600 hover:text-gray-900 duration-300 ",
          className
        )}
        {...props}
      >
        <Image
          width={150}
          height={150}
          src={logo}
          className=" smd:hidden"
          alt="logo"
        />
      </h2>
      <div>
        <span className="colst underlined underline-clip text-[25px] font-roboto font-extrabold text-[#fff]">
          ElSalam
        </span>
        <h3 className="animate-charcter text-[20px] font-roboto font-extrabold">
          Trade
        </h3>
      </div>
    </Link>
  );
};

export default Logo;

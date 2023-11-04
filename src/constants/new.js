export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: "/planet-01.png",
    title: "The Hogwarts",
  },
  {
    id: "world-2",
    imgUrl: "/planet-02.png",
    title: "The Upside Down",
  },
  {
    id: "world-3",
    imgUrl: "/planet-03.png",
    title: "Kadirojo Permai",
  },
  {
    id: "world-4",
    imgUrl: "/planet-04.png",
    title: "Paradise Island",
  },
  {
    id: "world-5",
    imgUrl: "/planet-05.png",
    title: "Hawkins Labs",
  },
];

export const startingFeatures = [
  "Find a world that suits you and you want to enter",
  "Enter the world by reading basmalah to be safe",
  "No need to beat around the bush, just stay on the gas and have fun",
];

export const newFeatures = [
  {
    imgUrl: "/vrpano.svg",
    title: "A new world",
    subtitle:
      "we have the latest update with new world for you to try never mind",
  },
  {
    imgUrl: "/headset.svg",
    title: "More realistic",
    subtitle:
      "In the latest update, your eyes are narrow, making the world more realistic than ever",
  },
];

export const insights = [
  {
    imgUrl: "/planet-06.png",
    title: "The launch of the Metaverse makes Elon musk ketar-ketir",
    subtitle:
      "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
  },
  {
    imgUrl: "/planet-07.png",
    title: "7 tips to easily master the madness of the Metaverse",
    subtitle:
      "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
  },
  {
    imgUrl: "/planet-08.png",
    title: "With one platform you can explore the whole world virtually",
    subtitle:
      "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
  },
];

export const socials = [
  {
    name: "twitter",
    url: "/twitter.svg",
  },
  {
    name: "linkedin",
    url: "/linkedin.svg",
  },
  {
    name: "instagram",
    url: "/instagram.svg",
  },
  {
    name: "facebook",
    url: "/facebook.svg",
  },
];
import {
  DeviceArrowIcon,
  DeviceCardsIcon,
  DeviceClockIcon,
  DeviceListIcon,
  DeviceLockIcon,
  DeviceChartIcon,
} from "./../components/StockLogos";
import Image from "next/image";
import photo1 from "../images/1.png";
import photo2 from "../images/2.png";
import photo3 from "../images/3.png";
import photo4 from "../images/4.jpg";
import photo6 from "../images/6.jpg";
import photo7 from "../images/7.jpg";
import photo8 from "../images/8.png";
import photo9 from "../images/9.jpg";
import photo10 from "../images/10.png";
import photo11 from "../images/11.png";
import photo12 from "../images/12.jpg";

export const navData = [
  { _id: 101, title: "Home", href: "#home" },
  { _id: 102, title: "Services", href: "#services" },
  { _id: 103, title: "Info", href: "#information" },
  { _id: 104, title: "Partners", href: "#partners" },
];

export const reviews = [
  {
    title: <Image width={400} height={400} src={photo1} alt="Pepsi" />,
    author: "بيبسى",
  },
  {
    title: <Image width={400} height={400} src={photo2} alt="Unilever" />,
    author: "يونيفر",
  },
  {
    title: <Image width={400} height={400} src={photo3} alt="Kellogg" />,
    author: "كيلوجز نودلز",
  },
  {
    title: <Image width={400} height={400} src={photo4} alt="Halwani" />,
    author: "حلوانى",
  },
  {
    title: <Image width={400} height={400} src={photo6} alt="nestle" />,
    author: "نستله",
  },
  {
    title: <Image width={400} height={400} src={photo7} alt="Beyti" />,
    author: "بيتى",
  },
  {
    title: <Image width={400} height={400} src={photo8} alt="atyab" />,
    author: "أطياب",
  },
  {
    title: <Image width={400} height={400} src={photo9} alt="Fruitoria" />,
    author: "فروتوريا",
  },
  {
    title: <Image width={400} height={400} src={photo10} alt="Chipsy" />,
    author: "شيبسى",
  },
  {
    title: (
      <Image width={400} height={400} src={photo11} alt="elhassanwelhussain" />
    ),
    author: "الحسن والحسين",
  },
  {
    title: <Image width={400} height={400} src={photo12} alt="Farm Frites" />,
    author: "فارم فريتس",
  },
];

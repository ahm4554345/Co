import { useId } from "react";
import req from "./../images/req.mp4";
import AppScreen from "@/components/AppScreen";
import { motion } from "framer-motion";
import {
  DiageoLogo,
  LaravelLogo,
  MirageLogo,
  ReversableLogo,
  StatamicLogo,
  StaticKitLogo,
  TransistorLogo,
  TupleLogo,
} from "@/components/StockLogos";
import clsx from "clsx";
import Image from "next/image";
import map from "./../images/map.png";
import photoimport from "/src/images/import.jpg";
const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
const maxZIndex = 2147483647;

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: "blur(4px)",
  zIndex: 0,
  transition: { duration: 0.4 },
};

const bodyVariantForwards = (custom) => ({
  y: "100%",
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
});
const bodyAnimation = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: "0%",
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
};

function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  );
}

function DeviceNotificationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  );
}

function DeviceTouchIcon(props) {
  let id = useId();

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  );
}

function InviteScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Upon request From our representative</AppScreen.Title>
        <AppScreen.Subtitle>
          Get To you In <span className="text-white">No Time</span> We Cover
          Your Governorates.
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="">
          <video src={req} muted autoPlay loop></video>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}
function StocksScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Stocks</AppScreen.Title>
        <AppScreen.Subtitle>
          Everything in the warehouse, moment by moment, with the latest offers
          with our representative Phone
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="divide-y divide-gray-100 flex flex-col gap-4">
          {[
            {
              name: "Pepsi",
              price: "2,098.01",
              change: "-2400",
              color: "#F9322C",
              logo: LaravelLogo,
            },
            {
              name: "ISIS",
              price: "2,098.01",
              change: "-2000",
              color: "#5A67D8",
              logo: TupleLogo,
            },
            {
              name: "Chipsy",
              price: "2,098.01",
              change: "-1200",
              color: "#2A5B94",
              logo: TransistorLogo,
            },
            {
              name: "Kellogg's Noodles",
              price: "2,098.01",
              change: "-420",
              color: "#3320A7",
              logo: DiageoLogo,
            },
            {
              name: "Halwani",
              price: "2,098.01",
              change: "-650",
              color: "#2A3034",
              logo: StaticKitLogo,
            },
            {
              name: "Almarai",
              price: "2,098.01",
              change: "-700",
              color: "#0EA5E9",
              logo: StatamicLogo,
            },
            {
              name: "Nestle",
              price: "2,098.01",
              change: "-1500",
              color: "#16A34A",
              logo: MirageLogo,
            },
            {
              name: "beyti",
              price: "2,098.01",
              change: "-300",
              color: "#8D8D8D",
              logo: ReversableLogo,
            },
          ].map((stock) => (
            <div key={stock.name} className="flex items-center gap-4 px-4 py-3">
              <div
                className="flex-none rounded-full"
                style={{ backgroundColor: stock.color }}
              >
                <stock.logo className="h-10 w-10" />
              </div>
              <div className="flex-auto text-sm text-gray-900">
                {stock.name}
              </div>
              <div className="flex-none text-right">
                <div className="text-sm font-medium text-gray-900">
                  {stock.price}
                </div>
                <div
                  className={clsx(
                    "text-xs leading-5",
                    stock.change.startsWith("+")
                      ? "text-blue-600"
                      : "text-gray-500"
                  )}
                >
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

function InvestScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Import</AppScreen.Title>
        <AppScreen.Subtitle>
          <span className="text-white"></span>Professional Import Services from
          abroad
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="space-y-4">
            {[
              { label: "customs & clearance handling" },
              {
                label:
                  "Provide our Clients with time- saving economical solutions at extremely affordable rates.",
                value: (
                  <div className="flex">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                      <path
                        d="M17 15V7H9M17 7 7 17"
                        stroke="#2563eb"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ),
              },
              {
                label: "It's Like Click on the under button with us",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between border-b border-gray-100 pb-4"
              >
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="text-sm font-semibold text-gray-900">
                  {item.value}
                </div>
              </div>
            ))}
            <div className="rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white">
              Reach Us And It Will be like Press A Button
            </div>
          </div>
        </div>
        <div>
          <Image src={photoimport} width={700} height={700} alt="import" />
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

export const features = [
  {
    name: "Logistics",
    description:
      "Logistics ensures accuracy and speed in supply chain solutions globally. From warehousing to distribution, we improve the delivery of your product, and act as a trusted partner for brands like Pepsi & ISIS & Chipsy and more Find out in Our partner section.",
    icon: DeviceUserIcon,
    screen: InviteScreen,
  },
  {
    name: "Distribution",
    description:
      "Using the latest technologies in distribution, we show all available products in real time and the offers available from the company itself to points of sale in seconds.",
    icon: DeviceNotificationIcon,
    screen: StocksScreen,
  },
  {
    name: "Import",
    description:
      "Import Services From all over the world and ways to facilitate the process.",
    icon: DeviceTouchIcon,
    screen: InvestScreen,
  },
];

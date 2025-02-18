import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import dboy from "../assets/dboy.png";
import Container from "../components/ui/Container";
import CountUp from "react-countup";

const TopSection = () => {
  return (
    <Container>
      <main className="flex flex-col z-10 lg:flex-row min-h-[calc(105vh-80px)] md:pt-0 pt-20 items-center gap-12 py-12">
        <LeftSection />
        <RightSection />
      </main>
    </Container>
  );
};

const LeftSection = () => (
  <section className="flex-1 space-y-8 text-center lg:text-left">
    <article className="space-y-4">
      <h1 className="text-5xl sm:text-5xl lg:text-8xl font-bold tracking-tight text-nowrap">
        <span className="text-orange-600 inline-block transform hover:scale-105 transition-transform duration-300">
          Rehbar
        </span>
        <span className="relative">
          {" "}
          Post
          <div className="absolute -bottom-1 left-0 w-full h-2 bg-orange-200/50 -skew-x-6" />
        </span>
      </h1>
      <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium">
        Simplify Shipping, Amplify Success
      </h2>
    </article>

    <p className="text-gray-500 max-w-md mx-auto lg:mx-0 text-base sm:text-lg">
      Affordable rates, faster deliveries, and zero hassles for your business.
      Scale smarter with us!
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      {/* <Button
        text="Get Started"
        type="primary"
        icon={<FaArrowRight className="w-5 h-5" />}
      />
      <Button
        text="Sign in"
        type="secondary"
        icon={<GoPackage className="w-5 h-5" />}
      /> */}

      <input
        type="text"
        placeholder="Track your order"
        className="px-3 py-4 bg-slate-800 dark:bg-white rounded-xl ring-1 ring-orange-600 font-semibold w-1/2"
      />
      <Button
        text="Track"
        type="primary"
        icon={<GoPackage className="w-5 h-5" />}
      />
    </div>

    <div className="flex flex-row gap-8 pt-12">
      <Stat number={10} endLabel="K" label="Active Users" />
      <Stat number={99} endLabel="%" label="Delivery Rate" />
      <Stat number={24} endLabel="/7" label="Support" />
    </div>
  </section>
);

const RightSection = () => (
  <section className="w-full lg:w-1/2 relative hidden md:flex overflow-visible h-64 sm:h-80 md:h-96 lg:h-[70vh]">
    <div className="absolute inset-0 bg-gradient-to-r from-orange-900 to-rose-900 dark:from-orange-300 dark:to-rose-300 opacity-70 blur-2xl rounded-full"></div>
    <img
      className="w-full h-full object-contain relative z-10"
      src={dboy || "/placeholder.svg?height=600&width=600"}
      alt="Delivery person carrying packages"
    />
  </section>
);

const Button = ({ text, type = "primary", icon }) => (
  <button
    className={`
      group flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg
      transition-all duration-300 transform hover:-translate-y-0.5
      ${
        type === "primary"
          ? "bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-orange-300/30"
          : "bg-white text-gray-800 border-2 border-gray-200 hover:border-orange-200 hover:bg-orange-50"
      }
    `}
    aria-label={text}
  >
    <span>{text}</span>
    {icon && (
      <span className="transform group-hover:translate-x-0.5 transition-transform">
        {icon}
      </span>
    )}
  </button>
);

const Stat = ({ number, label, endLabel }) => {
  return (
    <div className="text-left">
      <div className="text-2xl font-bold text-orange-600">
        <CountUp duration={2} className="counter" end={number} />
        {endLabel}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
};

export default TopSection;

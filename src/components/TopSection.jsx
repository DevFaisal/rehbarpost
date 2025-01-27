import React from "react";
import Container from "./ui/Container";
import { FaArrowRight } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import dboy from "../assets/dboy.png";
import CountUp from "react-countup";

const TopSection = () => {
  return (
    <Container>
      <main className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] md:pt-0 pt-50 items-center gap-12 py-12">
        <section className="flex-1 space-y-8 text-center lg:text-left">
          <article className="space-y-4">
            <h1 className="text-5xl sm:text-5xl lg:text-8xl font-bold tracking-tight">
              <span className="text-orange-600 inline-block transform hover:scale-105 transition-transform duration-300">
                Rehbar
              </span>
              <span className="relative ">
                {""} Post
                <div className="absolute -bottom-1 left-0 w-full h-2 bg-orange-200/50 -skew-x-6" />
              </span>
            </h1>
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium">
              Simplify Shipping, Amplify Success
            </h3>
          </article>

          <p className="text-gray-500 max-w-md mx-auto lg:mx-0 text-base sm:text-lg">
            Affordable rates, faster deliveries, and zero hassles for your
            business. Scale smarter with us!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              text="Get Started"
              type="primary"
              icon={<FaArrowRight className="w-5 h-5" />}
            />
            <Button
              text="Sign in"
              type="secondary"
              icon={<GoPackage className="w-5 h-5" />}
            />
          </div>

          <div className="hidden lg:flex gap-8 pt-12">
            <Stat number={10} endLabel="K" label="Active Users" />
            <Stat number={99} endLabel={"%"} label="Delivery Rate" />
            <Stat number={24} endLabel={"/7"} label="Support" />
          </div>
        </section>

        <section className="w-full hidden lg:grid lg:w-1/2 relative">
          <div className="relative bg-gradient-to-r from-orange-900 to-rose-900 dark:from-orange-300 dark:to-rose-300 rounded-full p-5 shadow-xl overflow-visible">
            <img
              className="w-full h-[400px] lg:h-[600px] object-cover "
              src={dboy}
              alt="Delivery boy"
            />
          </div>
        </section>
      </main>
    </Container>
  );
};

function Button({ text, type = "primary", icon }) {
  return (
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
}

function Stat({ number, label, endLabel }) {
  return (
    <div className="text-left">
      <div className="text-2xl font-bold text-orange-600">
        <CountUp duration={2} className="counter" end={number} />
        {endLabel}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

export default TopSection;

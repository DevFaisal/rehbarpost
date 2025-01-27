import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiPackage } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";

import pic from "../assets/image.jpg";

function WhyChoose() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <section className="w-full lg:w-1/2">
          <div className="bg-amber-100 p-4 rounded-3xl overflow-hidden">
            <img
              className="w-full h-[400px] lg:h-[600px] object-cover rounded-2xl"
              src={pic}
              alt="Delivery service"
            />
          </div>
        </section>

        <section className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500">
              Why choose Rehbar Post?
            </h1>
            <p className="text-gray-600 text-lg">
              We provide comprehensive and efficient shipping solutions tailored
              to your business needs:
            </p>
          </div>

          <div className="grid gap-6">
            <Card
              icon={<CiDeliveryTruck className="w-10 h-10 text-orange-500" />}
              title="Standard Shipping"
              description="Cost-effective and reliable, ensuring timely deliveries across India"
            />
            <Card
              icon={<FiPackage className="w-10 h-10 text-orange-500" />}
              title="Express Delivery"
              description="Premium service for time-sensitive packages with guaranteed next-day delivery"
            />
            <Card
              icon={<CiClock2 className="w-10 h-10 text-orange-500" />}
              title="Real-time Tracking"
              description="Advanced tracking system providing end-to-end visibility of your shipments"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function Card({ icon, title, description }) {
  return (
    <div className="p-6 rounded-xl hover:bg-gray-800 hover:dark:bg-orange-50 transition-colors duration-300">
      <div className="flex items-center gap-4 mb-3">
        <span className="flex-shrink-0">{icon}</span>
        <h2 className="font-semibold text-xl md:text-2xl ">{title}</h2>
      </div>
      <p className="text-gray-600 ml-14">{description}</p>
    </div>
  );
}

export default WhyChoose;

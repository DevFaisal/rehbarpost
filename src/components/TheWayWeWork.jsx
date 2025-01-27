import React from "react";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoMdAirplane } from "react-icons/io";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { PiArrowArcRightThin } from "react-icons/pi";

const TheWayWeWork = () => {
  const howWeWork = [
    {
      icon: HiBuildingOffice2,
      heading: "Booked",
      paragraph:
        "Create your shipment by providing details online through our easy-to-use platform.",
    },
    {
      icon: IoMdAirplane,
      heading: "Dispatched",
      paragraph:
        "Once booked, your order is quickly dispatched from the origin to ensure a smooth journey.",
    },
    {
      icon: PiBuildingOfficeFill,
      heading: "Track",
      paragraph:
        "Real-time tracking ensures you and your customers stay updated on the order's journey.",
    },
    {
      icon: TbTruckDelivery,
      heading: "NDR Management",
      paragraph:
        "If delivery fails, our proactive NDR management steps in to resolve issues and reduce RTO.",
    },
  ];

  return (
    <section className="flex flex-col items-center p-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        The way we work at{" "}
        <span className="relative whitespace-nowrap">
          <span className="relative z-10 text-orange-600">Rehbar Post</span>
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-orange-200/50 -skew-x-6 z-0" />
        </span>
      </h2>
      <section className="relative flex md:flex-nowrap items-center flex-wrap p-6 justify-center gap-6">
        {howWeWork.map((card, index) => (
          <HowWeWorkCard
            key={index}
            Icon={card.icon}
            heading={card.heading}
            paragraph={card.paragraph}
          />
        ))}
        <div className="hidden lg:flex">
          <span className="absolute  left-52 top-0">
            <PiArrowArcRightThin className="text-slate-800" size={150} />
          </span>
          <span className="absolute  left-120 top-0">
            <PiArrowArcRightThin className="text-slate-800" size={150} />
          </span>
          <span className="absolute  left-190 top-0">
            <PiArrowArcRightThin className="text-slate-800" size={150} />
          </span>
        </div>
      </section>
    </section>
  );
};

export default TheWayWeWork;

function HowWeWorkCard({ Icon, heading, paragraph }) {
  return (
    <div className="max-w-sm flex flex-col gap-3 justify-center items-center p-6 ">
      <div className="p-10 rounded-full bg-amber-100">
        <Icon size={50} className="text-black" />
      </div>
      <h1 className="font-semibold text-2xl text-center text-nowrap">
        {heading}
      </h1>
      <p className="text-center text-gray-600">{paragraph}</p>
    </div>
  );
}

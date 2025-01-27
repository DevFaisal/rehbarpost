import React from "react";
import cycle from "../assets/cycle.png";

const ShippingDiscounts = () => {
  return (
    <section className="flex justify-center lg:justify-between items-center">
      <div className="w-md flex text-center lg:text-left flex-col gap-4">
        <h1 className="text-5xl font-bold text-orange-600">
          Shipping discounts
        </h1>
        <p className="text-xl text-gray-400">
          Shipping costs are the #1 reason for shopping cart abandonment. If you
          want to compete in the eCommerce space, you’re going to need to have
          the best shipping rates possible.
        </p>
      </div>
      <div className="hidden lg:flex">
        <img width={500} src={cycle} alt="" />
      </div>
    </section>
  );
};

export default ShippingDiscounts;

import React from "react";

const TextEffect = ({ ist, sec }) => {
  return (
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
      {ist}
      <span className="relative whitespace-nowrap">
        <span className="relative z-10 text-orange-600">{sec}</span>
        <div className="absolute -bottom-2 left-0 w-full h-2 bg-orange-200/50 -skew-x-6 z-0" />
      </span>
    </h2>
  );
};

export default TextEffect;

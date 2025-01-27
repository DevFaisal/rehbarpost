import React from "react";
import TextEffect from "./ui/TextEffect";
import TeamCard from "./ui/TeamCard";

const Team = () => {
  const teamMembers = [
    {
      name: "Zeeshan",
      role: "Founder | CEO",
      image: "https://www.rehbarpost.com/assets/img/team/zeeshanpic.png",
      content:
        "We have a mission to empower businesses with seamless and efficient shipping solutions",
    },
    {
      name: "Faisal Rasheed",
      role: "Co-Founder | COO",
      image: "https://www.rehbarpost.com/assets/img/team/faisalpic.png",
      content:
        "We are redefining logistics by focusing on minimizing RTOs and maximizing profitability&nbsp;for&nbsp;businesses.",
    },
    {
      name: "Shoaib Wani",
      role: "Co-Founder | CTO",
      image: "https://www.rehbarpost.com/assets/img/team/shoaibpic.png",
      content:
        "Technology is the backbone of Rehbar Post, ensuring precision, speed, and reliability in every shipment",
    },
  ];

  return (
    <div className="flex flex-col justify-center gap-20 py-10 items-center">
      <TextEffect ist={"Meet Our Professional "} sec={"Team"} />
      <section className="flex flex-wrap gap-3 w-full px-3">
        {teamMembers.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </section>
    </div>
  );
};

export default Team;

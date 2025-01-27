import { BsBox } from "react-icons/bs";
import { GoPackage } from "react-icons/go";
import { LuRotateCcwSquare } from "react-icons/lu";

function MidSectionOne() {
  const cardData = [
    {
      icon: BsBox,
      heading: "Domestic",
      paragraph:
        "Fast. Reliable. Nationwide: Deliver your packages across India with speed and precision. We ensure hassle-free shipping to every corner of the country at competitive rates.",
      color: "from-blue-500 to-blue-600",
      hoverColor: "group-hover:from-blue-600 group-hover:to-blue-700",
    },
    {
      icon: GoPackage,
      heading: "Forward",
      paragraph:
        "From Your Store to Their Door: Seamlessly ship products to your customers anywhere in India. Our reliable forward shipping service guarantees timely deliveries to boost customer satisfaction.",
      color: "from-orange-500 to-orange-600",
      hoverColor: "group-hover:from-orange-600 group-hover:to-orange-700",
    },
    {
      icon: LuRotateCcwSquare,
      heading: "Return",
      paragraph:
        "Easy Returns, Hassle-Free Process: Handle customer returns effortlessly with our streamlined return shipping service. We make returns simple, fast, and cost-effective for your business.",
      color: "from-emerald-500 to-emerald-600",
      hoverColor: "group-hover:from-emerald-600 group-hover:to-emerald-700",
    },
  ];

  return (
    <div className="relative  overflow-hidden">
      <section className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold ">
            Transport and Logistics
            <span className="relative whitespace-nowrap">
              <span className="relative"> Solution</span>
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-orange-200/50 -skew-x-6" />
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive shipping solutions designed to meet your business
            needs with reliability and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Card
              key={index}
              Icon={card.icon}
              heading={card.heading}
              paragraph={card.paragraph}
              color={card.color}
              hoverColor={card.hoverColor}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function Card({
  Icon,
  heading,
  paragraph,
  color,
  hoverColor,
  buttonText = "Learn more",
}) {
  return (
    <div className="relative bg-gray-700 dark:bg-white rounded-2xl border-[0.1px]  border-gray-500 hover:shadow-xl hover:bg-orange-800 dark:hover:bg-amber-100 transition-all duration-300 overflow-hidden">
      <div className="flex flex-col justify-between p-8 space-y-6">
        <div className="relative inline-block">
          <div
            className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${color} ${hoverColor} transition-all duration-300 flex items-center justify-center`}
          >
            <Icon className="w-8 h-8 " />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{heading}</h3>
          <p className="text-gray-400 leading-relaxed">{paragraph}</p>
        </div>

        <button
          className="w-full px-6 py-3  font-semibold rounded-xl bg-gradient-to-r transition-all duration-300 transform group-hover:-translate-y-0.5 hover:shadow-lg
          hover:shadow-orange-200/20 active:translate-y-0 active:shadow-none
          from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
        >
          {buttonText}
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  );
}

export default MidSectionOne;

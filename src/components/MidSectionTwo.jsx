import { BsPeople, BsTruck, BsBox } from "react-icons/bs";

function MidSectionTwo() {
  const infoCards = [
    {
      num: "100+",
      heading: "Brands Trust",
      tag: "Brands that trust Rehbar Post",
      icon: BsPeople,
      color: "from-amber-400 to-amber-500",
      shadowColor: "shadow-amber-200/30",
    },
    {
      num: "10+",
      heading: "Delivery Partners",
      tag: "Full India Coverage",
      icon: BsTruck,
      color: "from-orange-400 to-orange-500",
      shadowColor: "shadow-orange-200/30",
    },
    {
      num: "10K+",
      heading: "Shipments Done",
      tag: "Tons of Shipments",
      icon: BsBox,
      color: "from-blue-400 to-blue-500",
      shadowColor: "shadow-blue-200/30",
    },
  ];

  return (
    <div className="relative  overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight ">
              One place to manage
              <span className="relative whitespace-normal lg:whitespace-nowrap text-orange-600">
                <span className="relative"> all your shipments</span>
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-orange-200/50 -skew-x-6" />
              </span>
              and orders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              We have the capability to tailor solutions for individual
              businesses by moulding our comprehensive range of services to meet
              your specific needs.
            </p>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {infoCards.map((card, index) => (
                <InfoCard
                  key={index}
                  {...card}
                  className={index === 2 ? "sm:col-span-2" : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  num,
  heading,
  tag,
  icon: Icon,
  color,
  shadowColor,
  className = "",
}) {
  return (
    <div
      className={`group relative  rounded-2xl transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <div
        className={`relative p-6  rounded-2xl shadow-lg group-hover:shadow-xl ${shadowColor} transition-all duration-300`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-r ${color} `}
          >
            <Icon className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {num}
              </h3>
            </div>
            <p className="text-lg font-semibold text-gray-900">{heading}</p>
            <p className="text-sm text-gray-600">{tag}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidSectionTwo;

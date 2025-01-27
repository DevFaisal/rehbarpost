import React from "react";
import { BsPersonCircle, BsStarFill, BsQuote } from "react-icons/bs";

const testimonials = [
  {
    name: "Faisal Farooq",
    role: "Developer",
    image: "https://avatars.githubusercontent.com/u/74142521?v=4",
    content:
      "Rehbar Post has transformed how we handle our deliveries. Their efficient service and real-time tracking have significantly improved our customer satisfaction rates.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Retail Store Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    content:
      "The reliability and speed of Rehbar Post's delivery service have been instrumental in growing our business. Their customer support is exceptional.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    content:
      "We've seen a 40% reduction in delivery-related customer complaints since switching to Rehbar Post. Their return handling process is seamless.",
    rating: 5,
  },
  {
    name: "Sarah Ahmed",
    role: "Online Boutique Owner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    content:
      "The dashboard makes it incredibly easy to manage all our shipments. Their competitive rates and reliable service make them our top choice.",
    rating: 5,
  },
];

const OurClient = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold ">
            Words of Trust From
            <span className="relative whitespace-nowrap">
              <span className="relative text-orange-600"> Our Clients</span>
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-orange-200/50 -skew-x-6" />
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our valued customers have to say about their experience
            with Rehbar Post
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 pb-8 ">
            {testimonials.map((testimonial, index) => (
              <ClientCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function ClientCard({ name, role, image, content, rating }) {
  return (
    <div className="relative flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] border-[0.1px] bg-gray-600 dark:bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden">
      <div className="h-full   transition-all duration-300 p-8 relative ">
        <div className="absolute -right-6 -top-6 ">
          <BsQuote className="w-24 h-24 transform rotate-180" />
        </div>

        <div className="relative space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-300">{role}</p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <BsStarFill key={i} className="w-5 h-5 text-orange-400" />
            ))}
          </div>

          <blockquote className="text-gray-400 leading-relaxed">
            "{content}"
          </blockquote>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-orange-50/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}

export default OurClient;

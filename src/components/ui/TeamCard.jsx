import React from "react";


function TeamCard({ name, role, image, content }) {
  return (
    <div className="relative h-full md:h-63  w-fit sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] border-[0.1px] bg-gray-600 dark:bg-white ring-1 ring-violet-500 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden">
      <div className="h-full transition-all duration-300 p-8 relative ">
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-300">{role}</p>
            </div>
          </div>

          <blockquote className="text-gray-400 leading-relaxed">
            {content}
          </blockquote>
        </div>

        <div className="absolute bg-gradient-to-t from-orange-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}

export default TeamCard;

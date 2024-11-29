// pages/saksham.tsx
import React from "react";

const data = [
  {
    heading: "Skill Development & Entrepreneurship",
    content:
      "Empowering rural women through skill development and entrepreneurial opportunities.",
  },
  {
    heading: "Eco-friendly Handmade Bags",
    content: "Reducing plastic usage by providing eco-friendly alternatives.",
  },
  {
    heading: "Financial Independence Provided",
    content: "Promoting financial independence for rural women artisans.",
  },
];
const SakshamPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 font-titilium ">
      <div className="container mx-auto max-w-6xl space-y-16">
        {/* Header Section */}
        <div className="text-center mt-9 space-y-16">
          <h1 className="text-3xl xsPhone:text-[min(7vh,7vw)] smTablet:text-[min(5vh,5vw)] font-bold text-[#085C2C] font-titilium">
            Project &quot;Saksham&quot;
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-titilium">
            An initiative aimed at empowering rural women and providing
            sustainable livelihoods through the creation of cloth vending
            machines. &quot;Saksham&quot; reduces the usage of hazardous plastic
            bags while offering economic opportunities to rural and urban women.
            We believe in providing an eco-friendly alternative by creating
            handmade bags crafted by talented rural women. Our handmade bags are
            not only beautiful but highly functional, capable of carrying up to
            5-7 kg of goods with ease. These bags are offered through cloth
            vending machines at an affordable price of only 5 Indian Rupees
            (₹5). To accomplish this, we will install cloth vending machines in
            strategic locations throughout Jaipur.
          </p>
        </div>

        {/* Objectives Section */}
        <div className="">
          <h2 className="xsPhone:text-[min(7vh,7vw)] smTablet:text-[min(5vh,5vw)] font-semibold text-[#085C2C] mb-8 text-center font-titilium">
            Objectives
          </h2>
        </div>

        <div className="container mx-auto px-4 md:mb-16 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:bg-[#085C2C] hover:text-white hover:shadow-xl"
              >
                <h3 className="font-titilium font-semibold text-xl md:text-2xl mb-4">
                  {item.heading}
                </h3>
                <hr className="border-gray-300 mb-4" />
                <p className="font-titilium font-light text-base md:text-lg leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SakshamPage;

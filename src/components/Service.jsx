import React from "react";
import CraftAnimation from "../animation_component/CraftAnimation";
import DollAnimation from "../animation_component/dollAnimation";
import CupAnimation from "../animation_component/CupAnimation";
import HammerAnimation from "../animation_component/HammerAnimation";

const services = [
  {
    component: <DollAnimation />,
    title: "Handmade Doll",
    description: [
      "A beautifully crafted doll, perfect for collectors and children alike.",
      "Each doll is unique and made with meticulous attention to detail.",
    ],
  },
  {
    component: <CraftAnimation />,
    title: "Handmade Crafts",
    description: [
      "Explore a variety of handmade crafts, each piece reflecting creativity and craftsmanship.",
      "Perfect for gifts, home decor, and personal collections.",
    ],
  },
  {
    component: <CupAnimation />,
    title: "Handmade Cup",
    description: [
      "Enjoy your favorite beverage in a",
      "uniquely crafted handmade cup.",
      "Each cup is a work of art, designed ",
      " to add charm to your daily routine. ",
    ],
  },
  {
    component: <HammerAnimation />,
    title: "Handmade Tools",
    description: [
      "Discover a range of handmade tools, combining functionality and artisan craftsmanship.",
      "Durable and designed for practical use in various projects.",
    ],
  },
  {
    component: <CupAnimation />,
    title: "Handmade Cup",
    description: [
      "Enjoy your favorite beverage in a",
      "uniquely crafted handmade cup.",
      "Each cup is a work of art, designed ",
      " to add charm to your daily routine. ",
    ],
  },
  {
    component: <HammerAnimation />,
    title: "Handmade Tools",
    description: [
      "Discover a range of handmade tools, combining functionality and artisan craftsmanship.",
      "Durable and designed for practical use in various projects.",
    ],
  },
];

const Service = () => {
  return (
    <div className="container mx-auto mt-12 py-10">
      <div className="text-center mb-10">
        <h1 className="font-bold text-primary text-3xl">Services We Provide</h1>
        <h2 className="text-center text-gray-600 mb-4 mt-2">Providing handmade and reliable Products</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-10 hover:cursor-pointer">
        {services.map((service, index) => (
          <div
            key={index}
            className="shadow-lg px-5 py-6 flex flex-col bg-white rounded-lg transform transition-transform duration-300 hover:scale-105 max-w-xs hover:bg-gradient-to-r from-[#e0f7f8] via-white to-[#e0f7f8]"
          >
            <div className="mb-4">{service.component}</div>
            <h2 className="text-primary text-center font-semibold text-xl mb-2">
              {service.title}
            </h2>
            {service.description.map((line, idx) => (
              <p key={idx} className="text-primary font-light text-center">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
     <div className="flex items-center justify-center">
     <button className=" shadow-lg rounded-full w-40 mt-10 text-primary font-semibold border-primary border-x-2 border-y-2 px-4 py-3 transform transition-transform duration-300 hover:scale-110  hover:bg-primary hover:text-white">
        Learn More
      </button>
     </div>
    </div>
  );
};

export default Service;

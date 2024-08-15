import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiFigma,
} from "react-icons/si";

const TechWeLove = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const techList = [

    {
      name: "MongoDB",
      icon: <SiMongodb color="#47A248" />,
      description: "A NoSQL database for modern applications.",
    },
    {
      name: "Express",
      icon: <SiExpress color="#000000" />,
      description: "A minimal and flexible Node.js web application framework.",
    },
    {
      name: "Figma",
      icon: <SiFigma color="#F24E1E" />,
      description: "A web-based UI/UX design tool.",
    },
    {
      name: "React",
      icon: <FaReact color="#61DAFB" />,
      description: "A JavaScript library for building user interfaces.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs color="#339933" />,
      description: "A JavaScript runtime built on Chrome's V8 engine.",
    },

  ];

  return (
    <div className="mt-10 px-4 md:px-10 lg:px-20 py-10 bg-gray-100">
      <h1 className="font-bold text-primary text-3xl text-center mb-2">
        Technology
      </h1>
      <p className="text-center text-gray-600 mb-4">
      I used these technology to built this Website!!
      </p>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        arrows={false}
      >
        {techList.map((tech, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center justify-center h-full min-h-[200px] transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#e0f7f8] hover:via-white hover:to-[#e0f7f8]">
              <div className="text-4xl mb-2">{tech.icon}</div>
              <h2 className="text-lg font-semibold text-black">{tech.name}</h2>
              <p className="text-sm text-gray-700 mt-2">{tech.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TechWeLove;

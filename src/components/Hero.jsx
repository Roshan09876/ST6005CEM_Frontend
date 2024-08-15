import React from "react";
import DashboardAnimation from "../animation_component/DashboardAnimation";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      " Buy Your Products..",
      "HandMade Crafts",
      "Home",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <div className="flex items-center justify-around px-10 ml-10">
      <div className="">
        <h1 className="text-teal-800 font-bold md:text-sm lg:text-xl py-3">
          Customers are God for us!!
        </h1>
        <h1 className="text-black font-bold sm:text-xl md:text-2xl lg:text-4xl">
          Our Expertise to develop and Provide{" "}
        </h1>
        <h1 className="text-black font-bold sm:text-xl md:text-2xl lg:text-4xl">
          HandMade Products for Customers{" "}
        </h1>
        <h1 className="text-primary font-semibold sm:text-xl md:text-2xl lg:text-4xl mb-2 py-2">
          {text}&nbsp;
        </h1>
        <div className="text-primary text-align font-semibold md:text-sm lg:text-xs mt-2 tracking-wide flex flex-col">
          <span>
            Celebrating Artistry and Craftsmanship with Unique Handmade Creations,
          </span>
          <span>
            Enriching Lives and Enhancing Experiences.
          </span>
        </div>
        <button className=" mt-10 text-white font-semibold bg-primary px-4 py-3 transform transition-transform duration-300 hover:scale-110">
          See details
        </button>
        <button className="ml-12 mt-10 text-primary font-semibold border-primary border-x-2 border-y-2 px-4 py-3 transform transition-transform duration-300 hover:scale-110  hover:bg-primary hover:text-white">
          Contact Us
        </button>
        <h1 className="font-bold text-primary mt-5 text-xl">
          10+ years of Experience{" "}
        </h1>
      </div>
      <div>
        <DashboardAnimation />
      </div>
    </div>
  );
};

export default Hero;

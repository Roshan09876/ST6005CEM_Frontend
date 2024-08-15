import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import TechWeLove from "../components/TechWeLove";
import TrustedBy from "../components/TrustedBy";
import Footer from "../components/Footer"

const Homepage = () => {

  return (
    <div className="mt-5">
      <Hero />
      <TrustedBy />
      <Service />
      <TechWeLove />
      <Footer/>
    </div>
  );
};

export default Homepage;

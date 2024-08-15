import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TrustedBy = () => {
  const logos = [
    {
      name: "one",
      imageUrl: "https://st2.depositphotos.com/1177973/12314/i/450/depositphotos_123146230-stock-photo-flat-lay-of-handcraft.jpg",

    },
    {
      name: "two",
      imageUrl:
        "https://img.freepik.com/free-vector/fashion-repair-service-logo-design_23-2150253063.jpg",
    },
    {
      name: "three",
      imageUrl:
        "https://t3.ftcdn.net/jpg/01/19/68/48/360_F_119684818_FYGz6SYMQoTSMJWnNIQhJzDpLhJRpijv.jpg"
    },
    {
      name: "four",
      imageUrl:
        "https://www.shutterstock.com/image-vector/craft-logo-template-creative-master-260nw-1598111458.jpg",
    },
    {
      name: "five",
      imageUrl:
        "https://logowik.com/content/uploads/images/craft8664.jpg"
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
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

  return (
    <div className="mt-10 px-4 md:px-10 lg:px-20 py-10 bg-gray-100">
      <h1 className="font-bold text-primary text-3xl text-center mb-2">
        We are Trusted By
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Our clients and partners include some of the most trusted brands.
      </p>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        arrows={false}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center p-2">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-2 flex items-center justify-center w-25 h-25">
              <img
                src={logo.imageUrl}
                alt={logo.name}
                className="max-h-24 max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TrustedBy;

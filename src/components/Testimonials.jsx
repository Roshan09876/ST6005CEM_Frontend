import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This company provided excellent service and support. Their team is very professional and always ready to help. We couldn't have asked for a better partner.",
      name: "John Doe",
      position: "CEO, Example Company",
      imageUrl: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      quote:
        "Their solutions have significantly improved our business operations. The team is skilled and attentive to our needs, delivering exceptional results.",
      name: "Jane Smith",
      position: "CTO, TechCorp",
      imageUrl: "https://via.placeholder.com/150",
      rating: 5,
    },
    {
      quote:
        "Highly professional team with top-notch skills. Their attention to detail and dedication to our project have been outstanding.",
      name: "Robert Brown",
      position: "Manager, Business Solutions",
      imageUrl: "https://via.placeholder.com/150",
      rating: 4,
    },
    {
      quote:
        "Great experience working with them. Highly recommended! Their expertise and support have been invaluable to our success.",
      name: "Emily White",
      position: "Director, Creative Agency",
      imageUrl: "https://via.placeholder.com/150",
      rating: 4.5,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex justify-center mb-2">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={i} className="text-yellow-500" />
          ))}
      </div>
    );
  };

  return (
    <div className="mt-10 px-4 md:px-10 lg:px-20 py-10">
      <h1 className="font-bold text-primary text-3xl text-center mb-2">
        Client Feedback
      </h1>
      <p className="text-center text-gray-600 mb-4">
        Our clients appreciate the dedication and quality of our work. Here’s
        what they have to say about us.
      </p>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
        showDots={true}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center">
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <p className="text-lg text-gray-700 mb-4">
                "{testimonial.quote}"
              </p>
              <h3 className="text-primary font-semibold text-xl">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {testimonial.position}
              </p>
              {renderStars(testimonial.rating)}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;

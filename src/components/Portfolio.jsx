import React from "react";

const Portfolio = () => {
  const projects = [
    {
      name: "Core Banking Solution (CBS) for 30+ Institutions",
      description:
        "A comprehensive banking solution implemented in over 30 financial institutions.",
      imageUrl:
        "https://static.wixstatic.com/media/f9b0fa_917798574b3d4d978d0f515c2ba97235~mv2.jpg/v1/fill/w_640,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f9b0fa_917798574b3d4d978d0f515c2ba97235~mv2.jpg",
    },
    {
      name: "Human Resource Management",
      description:
        "An efficient HR management system to streamline HR processes.",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1200/1*aoz09QCaLMxwTZ5osWuItw.jpeg",
    },
    {
      name: "Digital Field Application",
      description:
        "A mobile solution for field data collection and management.",
      imageUrl:
        "https://musonisystem.com/wp-content/uploads/2020/05/seamless_integration-768x430.jpg.webp",
    },
    {
      name: "mPassbook",
      description:
        "A digital passbook application for convenient account management.",
      imageUrl:
        "https://pmmodiyojana.in/wp-content/uploads/2022/10/image-194.png",
    },
    {
      name: "NDIS Software Solution",
      description:
        "A software solution for managing National Disability Insurance Scheme (NDIS) operations.",
      imageUrl:
        "https://providerhq.com.au/wp-content/uploads/2024/05/Datanova-1024x768.webp",
    },
    {
      name: "ITSS",
      description:
        "An integrated transport and storage solution for logistics management.",
      imageUrl:
        "https://english.onlinekhabar.com/wp-content/uploads/2016/07/Nrb-810.gif",
    },
    {
      name: "Indian Embassy Pension Distribution System",
      description:
        "A system developed for efficient pension distribution by the Indian Embassy.",
      imageUrl:
        "https://www.indembkathmandu.gov.in/docs/1668753874_Picture-Upload.JPG",
    },
    {
      name: "ACSIC Conference Management Web Solution with Mobile App",
      description:
        "A web and mobile solution for managing conferences organized by ACSIC.",
      imageUrl:
        "https://acsicnepal.com/static/media/bgpic.846dccfc9224360f9a31.jpg",
    },
  ];

  return (
    <div className="mt-10 px-4 md:px-10 lg:px-20 py-10 bg-gray-100">
      <h1 className="font-bold text-primary text-3xl text-center mb-2">
        Our Portfolio
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Here are some of the projects we have worked on.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 bg-white bg-opacity-30 backdrop-blur-lg group"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-bold">
                {project.name}
              </div>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-lg font-semibold text-black mb-2">
                {project.name}
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-block px-6 py-2 text-sm font-medium leading-6 text-center text-white transition bg-primary rounded-full shadow ripple hover:shadow-lg hover:bg-primary-dark focus:outline-none"
                style={{ cursor: "pointer" }}
              >
                Know More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

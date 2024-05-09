import React from "react";
import Dash from "./Dash";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    img: "/services__1.png",
    title: "Professonal Kitchen",
    desc: "Discover a space meticulously crafted for efficiency, creativity, and precision.",
  },
  {
    img: "/services__2.png",
    title: "Delivery",
    desc: "Experience convenience like never before with our delivery service.",
  },
  {
    img: "/services__3.png",
    title: "Wine List",
    desc: "Indulge in our curated wine list, meticulously selected to complement every palate and occasion.",
  },
  {
    img: "/services__4.png",
    title: "Free Wifi",
    desc: "Enjoy free WIFI",
  },
];

const Services = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Choose Our <span className="text-accent">Service</span>
        </h2>
        <p className="text-gray-700">
          Elevate your experiences and streamline your journey by selecting the
          best services tailored just for you.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {servicesData.map((item, index) => (
          <ServiceCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

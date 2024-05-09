import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10"
        src={"/hero2.png"}
        width={1000}
        height={600}
        alt="hero bg"
      />
      {/* <Navbar /> */}
      <div className="container h-[calc(100vh-120px)] grid items-center">
        <div className="space-y-4 bg-[#ffffff98] w-fit p-4">
          <p className="uppercase font-medium">The options are plentiful</p>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Delicious <span className="text-accent">Food</span>
          </h2>
          <p className="text-gray-700 text-[18px] sm:text-[18px]">
            Delectable cuisine with vibrant colors, tantalizing aromas,
            <br /> and exquisite flavors that dance on your palate.
            <br /> What are you waiting for?
          </p>

          <button className="bg-accent text-white px-6 py-4 rounded-3xl text-[18px] sm:text-[18px]">
            Explore Further
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

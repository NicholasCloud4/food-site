import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 "
        src={"/hero2.png"}
        width={1000}
        height={600}
        alt="hero bg"
      />
    </div>
  );
};

export default Hero;

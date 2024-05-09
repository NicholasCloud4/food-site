import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="container pt-4">
      <div className="flex justify-center items-center">
        <Image
          src={"/logo.png"}
          width={50}
          height={50}
          alt="logo"
          className="mr-4"
        />
        <ul className="md:flex hidden gap-8 items-center font-bold text-[14px] text-black">
          <li>Home</li>
          <li>About</li>
          <li>Food</li>
          <li>Dish</li>
          <li>Contact</li>
          <button className="bg-accent text-white px-6 rounded-3xl">
            Sign Up
          </button>
        </ul>

        <AiOutlineMenu className="md:hidden text-accent" size={30} />
      </div>
    </div>
  );
};

export default Navbar;

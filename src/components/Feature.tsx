import React from "react";
import Dash from "./Dash";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="container pt-40">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Highlighted <span className="text-accent">Dishes</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
        Indulge in our featured food, where tantalizing flavors meet exquisite
        presentation to create a culinary experience like no other.
      </p>

      <Dash />

      {/* CARDS */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <Image src={"/grid__1.png"} height={300} width={300} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

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
      <div className="flex flex-wrap justify-center gap-40 pt-8">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={"/grid__1.png"} height={300} width={600} alt="photo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shrimp Salad</h2>
            <p>
              Savor the refreshing blend of succulent shrimp, crisp greens,
              vibrant vegetables, and zesty dressing in our signature shrimp
              salad.
            </p>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={"/grid__2.png"} height={300} width={600} alt="photo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Baked Apples</h2>
            <p>
              Baked apples are a delectable dessert that epitomizes comfort and
              simplicity. Firm, tart apples are cored and filled with a sweet
              and aromatic mixture, often comprising brown sugar, cinnamon, and
              butter, before being baked until tender and caramelized.
            </p>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={"/grid__3.png"} height={300} width={600} alt="photo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cherries Chicken</h2>
            <p>
              succulent chicken pieces are typically pan-seared or roasted to
              perfection, then bathed in a luscious sauce made from fresh or
              dried cherries, along with complementary ingredients such as
              balsamic vinegar, red wine, or honey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

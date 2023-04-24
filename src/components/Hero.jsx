import React from "react";
import Carousel from "./Carousel";

function Hero() {
  return (
    <div className="sm:px-32 bg-indigo-600 py-10 flex justify-between flex-col sm:flex-row">
      <div className="flex flex-col w-fit">
        <p className="font-semibold text-orange-600 text-lg">Lorem ipsum dolor sit.</p>
        <div className="w-72">
          <h1 className="text-white mt-1 font-bold text-5xl">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
        </div>
        <p className="text-white/70 mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eos
          doloribus ea?
        </p>

        <button className="px-4 py-2 bg-amber-500 w-fit rounded-full mt-4"> <h1 className="text-white text-center">Get more details</h1> </button>
      </div>

      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default Hero;

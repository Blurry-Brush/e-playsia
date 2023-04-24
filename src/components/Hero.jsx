import React from "react";
import Carousel from "./Carousel";

function Hero() {
  return (
    <div className="px-10 sm:px-32 pt-20 bg-indigo-600 py-10 flex justify-between flex-col sm:flex-row">
      <div className="flex flex-col w-fit">
        <p className="font-semibold text-orange-600 text-lg">GET. SET. GAME.</p>
        <div className="w-96">
          <h1 className="text-white my-7 font-bold text-5xl ">
            Your Time to Grind and Game is now!
          </h1>
        </div>
        <p className="text-white/70 mt-4">
          Aspiring to be that Gaming Prodigy? We got you covered!
        </p>

        <button className="px-4 py-2 bg-orange-600 w-fit rounded-full mt-4"> <h1 className="text-white text-center">Get more details</h1> </button>
      </div>

      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import { Link } from "react-router-dom";

function GamesCard(props) {
  return (
    <Link to={`login/${props.title}`}>
      <div class="!z-5 mt-4 relative flex flex-col scale-110 rounded-[20px] max-w-[240px] text-white/90 bg-opacity-40 bg-clip-border hover:scale-[115%] transition-all duration-300 shadow-3xl w-full !p-4 3xl:p-![18px]">
        <div class="h-full w-full">
          <div class="relative w-full h-40">
            <img
              src={props.imgUrl}
              class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
              alt=""
            />
          </div>
          <div className="mt-2">
            <h1 className="text-center font-bold "> {props.title} </h1>
            <p className="text-center font-semibold text-white/80">
              140+ players
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GamesCard;

import React from "react";
import GamesCard from "./GamesCard";
function Games() {
  return (
    <main className="py-24 px-10 sm:px-32 bg-indigo-600">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl text-white">
          Create Your Account Now
        </h1>
      </div>
      <div className="flex items-center justify-center flex-wrap mx-auto  w-full gap-2 md:gap-3">
        <GamesCard
          title="Valorant"
          imgUrl="https://images.alphacoders.com/128/thumbbig-1282982.webp"
        />
        <GamesCard
          title="CSGO"
          imgUrl="https://images4.alphacoders.com/576/thumbbig-576758.webp"
        />
        <GamesCard
          title="DOTA 2"
          imgUrl="https://images2.alphacoders.com/507/thumbbig-507389.webp"
        />
        <GamesCard
          title="League of Legends"
          imgUrl="https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/02/LoL-Clash-Dates-2022-720x405.jpg"
        />
        <GamesCard
          title="BGMI"
          imgUrl="https://images7.alphacoders.com/941/thumbbig-941884.webp"
        />
      </div>
      <div className="  text-orange-500 text-center font-bold p-10 mx-auto text-3xl mt-20">
        Join the Biggest. Baddest Gaming Community out there!
      </div>
    </main>
  );
}

export default Games;

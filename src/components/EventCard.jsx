import React from "react";
const EventCard = (props) => {
    return (
        <div className="w-2/3 sm:mb-10 shadow-xl p-4 rounded-md drop-shadow-xl bg-black bg-opacity-50 text-white scale-105">
            <div className="rounded-lg w-full h-64 overflow-hidden">
                <img alt="content" class="object-contain object-center rounded-md" src={props.url} />
            </div>
            <h1 class="text-3xl font-medium title-font text-white mt-5">{props.name}</h1>
            <div className="mt-4 text-xs flex justify-between">
                <p className="text-orange-500">
                    {props.date}
                </p>
                <button className="bg-orange-600 transition-all hover:bg-white hover:text-black rounded-lg p-2 ">
                    Register Your Team
                </button>
            </div>
            <p class="text-xs leading-relaxed mt-2">{props.desc}</p>

        </div>
    );
}
export default EventCard;
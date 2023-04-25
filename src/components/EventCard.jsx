import React from "react";
const EventCard = (props) => {
    return (
        <div className="md:w-2/3 mb-10 mx-auto odd:content-start even:content-end shadow-xl  p-4 rounded-md drop-shadow-xl bg-black n bg-opacity-50 text-white scale-105">
            <div className="rounded-lg md:w-full max-h-64overflow-hidden">
                <img alt="content" class=" mx-auto sm:object-contain object-center rounded-md" src={props.url} />
            </div>
            <div className="flex flex-row justify-between">
                <div class="text-3xl font-medium title-font text-white mt-2">{props.name}</div>
                <div class="text-xl font-medium title-font text-white mt-2">{props.tier}</div>
            </div>
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
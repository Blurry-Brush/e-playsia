import React from "react";
const Related = () => {
    return (
        <section className=" ">
            <h1 className="text-4xl text-white mb-4 font-bold">
                Registered Events
            </h1>
            <div class="py-8  bg-white bg-opacity-75 rounded-md mb-10 ">
                <div class="h-full flex gap-4  items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                        <span class="text-orange-500 pb-2 border-b-2 border-gray-200">Jul</span>
                        <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div>
                    <div class="flex-grow ">
                        <h2 class="tracking-widest text-xl title-font font-bold  text-white mb-1">TIER 4</h2>
                        <h1 class="title-font text-xl font-medium text-gray-900 mb-3">The 400 Blows</h1>
                        <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>




                    </div>
                </div>
            </div>
        </section>
    )
}
export default Related;
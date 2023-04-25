import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import LogoBar from "./LogoBar";
import FlagShip from "./FlagShip";
import Related from "./RelatedEvents";
import Filter from "./Filter"
const Tournaments = () => {
    return <body className="overflow-x-hidden  bg-indigo-600">

        <LogoBar />

        <section className="">
            <Sidebar />
            <h1 className="text-center text-white text-3xl font-bold mb-10">Our Flagship Events</h1>
            <div className="px-32 justify-center">

                <FlagShip className="mx-auto " />
                <Related className="w-1/3" />
            </div>
        </section>
        <Footer />
    </body>
}
export default Tournaments;
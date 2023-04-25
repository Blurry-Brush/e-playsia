import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import LogoBar from "./LogoBar";
import FlagShip from "./FlagShip";
import Related from "./RelatedEvents";
import Filter from "./Filter"
import { Link } from "react-router-dom";

const Tournaments = () => {
    return <body className="overflow-x-hidden  bg-indigo-600">
        <LogoBar />


        <section className="">
            <div className="flex flex-row justify-between mb-2 font-bold text-white">
                <Filter />
                {/* <AddEvent /> */}
                <Link to="/tournaments/organise">
                    <button className="bg-orange-400 p-2 mr-2 hover:bg-white hover:text-black rounded-md">Organise</button>

                </Link>
            </div>
            <Sidebar />
            <h1 className="text-center text-white text-4xl font-bold mb-10">Our Flagship Events</h1>
            <div className="px-32 justify-center">

                <FlagShip className="mx-auto " />
                <Related className="w-1/3" />
            </div>
        </section>
        <Footer />
    </body>
}
export default Tournaments;
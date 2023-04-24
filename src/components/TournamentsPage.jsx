import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import LogoBar from "./LogoBar";
import FlagShip from "./FlagShip";
import Related from "./RelatedEvents";

const Tournaments = () => {
    return <body className="overflow-x-hidden  bg-indigo-600">

        <LogoBar />

        <section className="">
            <Sidebar />
            <div className="px-32  flex flex-row">
                <FlagShip className="w-4/5" />
                <Related />
            </div>
        </section>
        <Footer />
    </body>
}
export default Tournaments;
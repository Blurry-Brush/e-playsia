import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import LogoBar from "./LogoBar";
// import ChatApp from "../Chat";

const Community = () => {
    return <body className="overflow-x-hidden">
        <LogoBar />
        <Sidebar />
        <section className="bg-indigo-600 mx-auto text-center h-[1024px]">
            <div className="text-4xl font-bold">
                Something's Cooking
            </div>
        </section>
        <Footer />
    </body>
}
export default Community;
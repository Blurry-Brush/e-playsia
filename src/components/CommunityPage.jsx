import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import LogoBar from "./LogoBar";
import ChatApp from "../Chat";

const Community = () => {
    return <body className="overflow-x-hidden">
        <LogoBar />
        <Sidebar />
        <section>
            <div>
                <ChatApp />
            </div>
        </section>
        <Footer />
    </body>
}
export default Community;
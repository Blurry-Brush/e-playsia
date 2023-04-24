import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import LogoBar from "./LogoBar";
const Profile = () => {
    return (
        <body className="overflow-x-hidden">
            <LogoBar />
            <section>
                <Sidebar />
            </section>
            <Footer />
        </body>
    )
}
export default Profile;
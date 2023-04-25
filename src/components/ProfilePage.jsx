import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import LogoBar from "./LogoBar";
import LineRatingGraph from "./LineRatingGraph";
import RankingCard from "./RankingCard";
import PieChartWin from "./PieChart";
const Profile = () => {
    return (
        <div className="">
            <LogoBar />
            <section>
                <Sidebar />
            </section>
            <div className="bg-indigo-600 px-32 w-full flex justify-between relative gap-10">
                <LineRatingGraph />
                <RankingCard />
            </div>
            <div className="bg-indigo-600 px-32 w-full flex">

                <PieChartWin />
            </div>
            <Footer />
        </div>
    )
}
export default Profile;
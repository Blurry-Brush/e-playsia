import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div
            className=" bg-indigo-600 dark:bg-slate-900 w-screen  pattern"
        >
            <nav
                className="z-20 flex shrink-0 grow-0  justify-around gap-4 border-t border-gray-200 bg-white/50 p-6 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[32px] w-24 flex-col rounded-lg border"
            >


                <Link to="/profile">
                    <button
                        className="flex aspect-square min-h-[20px] w-12 mx-auto flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700    hover:text-white dark:text-gray-400"
                    >
                        <img src="https://img.icons8.com/pulsar-line/256/support.png" className="" alt="Profile" />

                        <small className="text-center text-xs font-medium"> Profile </small>
                    </button>
                </Link>
                <Link to="/tournaments">
                    <button

                        className="flex aspect-square min-h-[20px] w-12 mx-auto flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700  hover:text-white  dark:text-gray-400"
                    >
                        <img src="https://img.icons8.com/pulsar-line/256/trophy.png" alt="Tournaments" />

                        <small className="text-center text-xs font-medium"> Tournaments </small>
                    </button></Link>

                <Link to="/community">
                    <button

                        className="flex aspect-square min-h-[20px] w-12 mx-aut flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700  hover:text-white dark:text-gray-400"
                    >
                        <img src="https://img.icons8.com/pulsar-line/256/myspace.png" alt="Community" />

                        <small className="text-center text-xs font-medium"> Community </small>
                    </button></Link>

                <hr className="dark:border-gray-700/60" />


            </nav>
        </div>
    )
}

export default Sidebar;
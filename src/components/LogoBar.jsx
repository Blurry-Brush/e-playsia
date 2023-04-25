import React from "react";
import AuthContext from "../context/AuthContext";

function LogoBar() {

  const { user } = React.useContext(AuthContext);
  return (
    <div className="bg-indigo-600">
      <div className="ml-10 pt-4 flex flex-row">
        <img className="h-10 w-auto" src="https://i.ibb.co/Lk7RbrL/react-logo-1.png" alt="logo" />
        <p className="mt-1 font-bold text-2xl text-orange-600">ePlaysia</p>
      </div>

    </div>
  );
}

export default LogoBar;

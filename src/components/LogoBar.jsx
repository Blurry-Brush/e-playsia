import React from "react";
import AuthContext from "../context/AuthContext";

function LogoBar() {

  const {user, logOut} = React.useContext(AuthContext);
  return (
    <div className="bg-indigo-600 flex items-center gap-2">
      <div className="ml-10 pt-4">
        <img className="h-10 w-auto" src="https://i.ibb.co/Lk7RbrL/react-logo-1.png" alt="logo" />
      </div>

      {user && (
        <div className="pt-4">
          <button onClick={logOut} className="bg-orange-500/90 text-white/90 py-2 px-1 rounded">Logout</button>
        </div>
      )}

    </div>
  );
}

export default LogoBar;

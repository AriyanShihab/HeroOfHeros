import React from "react";
import profile from "../Dashbord/profile.png";

const Header = () => {
  return (
    <div className="bg-gray-800 py-3">
      <div className="flex justify-between items-center px-2 md:w-3/4 mx-auto">
        <div className="logo">
          <h2 className="md:text-3xl text-xl font-bold text-indigo-500">
            Hero of The Hero's
          </h2>
        </div>
        <div>
          <img className="w-[50px] rounded-full" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import profileImg from "../Dashbord/profile.png";

const UserInfo = (props) => {
  return (
    <div>
      <div className="user-info  rounded bg-white   p-3 border border-gray-800 border-opacity-20">
        <div className="grid grid-cols-3 bg-white rounded items-center">
          <img
            className="rounded-full my-2  mx-auto text-gray-900 col-span-1"
            src={profileImg}
            alt=""
          />
          <div className=" col-span-2">
            <h2 className="font-bold text-[18px]">Ariyan Shihab</h2>
            <p>Rajshahi, Bangladesh</p>
          </div>
        </div>
        <div className=" bg-white ">
          <h2 className="font-bold text-gray-800 mt-2 text-2xl">Achivments</h2>
          <div className="flex justify-between">
            <div>
              <h2 className=""> Assignment</h2>
              <h1 className="font-black font-2xl text-gray-800">100%</h1>
            </div>
            <div>
              <h2> Quiz</h2>
              <h1 className="font-black font-2xl text-gray-800">95%</h1>
            </div>
            <div>
              <h2> Helth</h2>
              <h1 className="font-black font-2xl text-gray-800">98%</h1>
            </div>
          </div>
        </div>
      </div>
      {/* add breack */}
      <div className=" mt-5  rounded bg-white   p-3 border border-gray-800 border-opacity-20">
        <h2 className="font-bold text-gray-800 text-xl">Add A Break</h2>
        <div className="flex justify-between">
          <h2
            onClick={() => props.handelBreakTime(10)}
            className="m-1 p-3 h-[40px] w-[40px] font-extrabold pt-2 bg-indigo-500 text-white rounded-full  cursor-pointer  "
          >
            10
          </h2>
          <h2
            onClick={() => props.handelBreakTime(20)}
            className="m-1 p-3 h-[40px] w-[40px] font-extrabold pt-2 bg-indigo-500 text-white rounded-full  cursor-pointer  "
          >
            20
          </h2>
          <h2
            onClick={() => props.handelBreakTime(30)}
            className="m-1 p-3 h-[40px] w-[40px] font-extrabold pt-2 bg-indigo-500 text-white rounded-full  cursor-pointer "
          >
            30
          </h2>
          <h2
            onClick={() => props.handelBreakTime(50)}
            className="m-1 p-3 h-[40px] w-[40px] font-extrabold pt-2 bg-indigo-500 text-white rounded-full cursor-pointer "
          >
            50
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

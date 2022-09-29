import React from "react";
import profileImg from "../Dashbord/profile.png";

const UserInfo = (props) => {
  return (
    <div>
      <div className="user-info  rounded    border border-gray-800 border-opacity-20">
        <div className="grid grid-cols-3 bg-gray-700 rounded items-center">
          <img
            className="rounded-full my-2  mx-auto text-gray-900 col-span-1"
            src={profileImg}
            alt=""
          />
          <div className=" col-span-2">
            <h2 className="font-bold text-[24px] text-gray-100">
              Ariyan Shihab
            </h2>
            <p className="text-white">Rajshahi, Bangladesh</p>
          </div>
        </div>
        <div className=" bg-gray-700  rounded p-2 mt-4">
          <h2 className="font-bold text-gray-100 mt-2 text-2xl mb-3 border-b-2">
            Achivments
          </h2>
          <div className="flex justify-between text-gray-200">
            <div>
              <h2 className=""> Assignment</h2>
              <h1 className="font-black font-2xl text-gray-100">100%</h1>
            </div>
            <div>
              <h2> Quiz</h2>
              <h1 className="font-black font-2xl text-gray-100">95%</h1>
            </div>
            <div>
              <h2> Helth</h2>
              <h1 className="font-black font-2xl text-gray-100">98%</h1>
            </div>
          </div>
        </div>
      </div>
      {/* add breack */}
      <div className=" mt-5  rounded bg-gray-700   p-3 border border-gray-800 border-opacity-20">
        <h2 className="font-bold text-gray-100 text-xl">
          Add A Break (in second)
        </h2>
        <div className="flex justify-between">
          <h2
            onClick={() => props.handelBreakTime(10)}
            className="m-1 p-3 h-[40px] w-[40px] font-extrabold pt-2 bg-indigo-500 text-white rounded-full  cursor-pointer  "
            style={{}}
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

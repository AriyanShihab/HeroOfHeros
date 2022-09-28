import React, { useEffect, useState } from "react";
import Milestone from "../Milestones/Milestone";
import profileImg from "./profile.png";

const Dashboard = () => {
  // state for store milestones
  const [mileStones, setMileStones] = useState([]);
  const [exerciseTime, setExerciseTime] = useState(0);
  const [breakTmie, setBreakTmie] = useState(0);
  // fetch mileStone Data
  useEffect(() => {
    fetch(`https://ariyanshihab.github.io/assignmentAPI/myFackeDB.json`)
      .then((res) => res.json())
      .then((data) => setMileStones(data));
  }, []);

  const handelAddToList = (milestoneData) => {
    setExerciseTime(exerciseTime + milestoneData.timeTake);
  };

  return (
    <div className="lg:w-3/4 mx-auto p-5  md:p-3 bg-gray-200 mt-10 rounded">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="milestone-container grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 gap-4 lg:col-span-3">
          {mileStones.map((milestone) => (
            <Milestone
              milestone={milestone}
              key={milestone._id}
              handelAddToList={handelAddToList}
            ></Milestone>
          ))}
        </div>
        <div className="information-holder lg:col-span-1">
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
              <h2 className="font-bold text-gray-800 mt-2 text-2xl">
                Achivments
              </h2>
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
                onClick={() => setBreakTmie(10)}
                className="m-1 p-3 h-[40px] w-[40px] font-extrabold pt-2 bg-indigo-500 text-white rounded-full  cursor-pointer  "
              >
                10
              </h2>
              <h2
                onClick={() => setBreakTmie(20)}
                className="m-1 p-3 h-[40px] w-[40px] font-extrabold pt-2 bg-indigo-500 text-white rounded-full  cursor-pointer  "
              >
                20
              </h2>
              <h2
                onClick={() => setBreakTmie(30)}
                className="m-1 p-3 h-[40px] w-[40px] font-extrabold pt-2 bg-indigo-500 text-white rounded-full  cursor-pointer "
              >
                30
              </h2>
              <h2
                onClick={() => setBreakTmie(50)}
                className="m-1 p-3 h-[40px] w-[40px] font-extrabold pt-2 bg-indigo-500 text-white rounded-full cursor-pointer "
              >
                50
              </h2>
            </div>
          </div>

          {/* display times */}
          <div className="rounded bg-white    p-3 border border-gray-800 border-opacity-20 mt-4">
            <h2 className="font-bold text-gray-800 text-xl">
              Exercise Details
            </h2>
            <div className="flex justify-between p-4 bg-gray-200 rounded m-2">
              <h2 className="font-bold text-gray-800 ">Exercise time</h2>
              <p>{exerciseTime}</p>
            </div>
            <div className="flex justify-between p-4 bg-gray-200 rounded m-2 mb-5">
              <h2 className="font-bold text-gray-800 t">Break time</h2>
              <p>{breakTmie}</p>
            </div>
          </div>
          <button className="w-full py-3 rounded font-bold text-white bg-indigo-600 block mt-4">
            Activity Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

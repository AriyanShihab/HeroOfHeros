import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Milestone from "../Milestones/Milestone";
import UserInfo from "../UserInfo/UserInfo";

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
  useEffect(() => {
    const breakTime = JSON.parse(localStorage.getItem("breakTime"));
    if (breakTime) {
      setBreakTmie(breakTime);
    }
  }, []);

  const handelBreakTime = (value) => {
    setBreakTmie(value);
    localStorage.setItem("breakTime", value);
  };

  return (
    <div className="lg:w-3/4 mx-auto p-2  md:p-3">
      <div className="mx-2  bg-gray-800 mt-10 rounded p-3 pb-8 ">
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
            {<UserInfo handelBreakTime={handelBreakTime}></UserInfo>}

            {/* display times */}
            <div className="rounded bg-gray-700    p-3 border border-gray-50 border-opacity-20 mt-4">
              <h2 className="font-bold text-gray-100 text-xl">
                Exercise Details
              </h2>
              <div className="flex justify-between p-4 bg-gray-500 rounded m-2">
                <h2 className="font-bold text-gray-100 ">Exercise time</h2>
                <p>{exerciseTime}</p>
              </div>
              <div className="flex justify-between p-4 bg-gray-500 rounded m-2 mb-5">
                <h2 className="font-bold text-gray-100 ">Break time</h2>
                <p>{breakTmie}</p>
              </div>
            </div>
            <button
              onClick={() =>
                swal("Good job Hero!", "You've Done it", "success")
              }
              className="w-full py-3 rounded font-bold text-white bg-indigo-600 block mt-4"
            >
              Activity Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

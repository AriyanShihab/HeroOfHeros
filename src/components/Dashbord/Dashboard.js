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

  const handelBreakTime = (value) => {
    setBreakTmie(value);
    localStorage.setItem("breakTime", value);
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
          {<UserInfo handelBreakTime={handelBreakTime}></UserInfo>}

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
          <button
            onClick={() => swal("Good job Hero!", "You've Done it", "success")}
            className="w-full py-3 rounded font-bold text-white bg-indigo-600 block mt-4"
          >
            Activity Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

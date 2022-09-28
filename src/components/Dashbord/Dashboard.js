import React, { useEffect, useState } from "react";
import Milestone from "../Milestones/Milestone";

const Dashboard = () => {
  // state for store milestones
  const [mileStones, setMileStones] = useState([]);
  // fetch mileStone Data
  useEffect(() => {
    fetch(`https://ariyanshihab.github.io/assignmentAPI/myFackeDB.json`)
      .then((res) => res.json())
      .then((data) => setMileStones(data));
  }, []);
  console.log(mileStones);
  return (
    <div className="lg:w-3/4 mx-auto p-5  md:p-3 bg-blue-100 mt-10 rounded">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        <div className="milestone-container grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 gap-4 lg:col-span-3">
          {mileStones.map((milestone) => (
            <Milestone milestone={milestone} key={milestone._id}></Milestone>
          ))}
        </div>
        <div className="information-holder lg:col-span-1"></div>
      </div>
    </div>
  );
};

export default Dashboard;

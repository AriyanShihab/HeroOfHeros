import React from "react";

const Milestone = (props) => {
  const { name, description, image, timeTake } = props.milestone;
  //   console.log(name, description, timeTake);
  return (
    <div>
      <div className="card p-2 bg-white rounded h-[460px] flex flex-col justify-between">
        <img className="max-w-full rounded" src={image} alt="" />
        <h2 className="font-bold text-gray-900 mt-5 text-xl mb-2">{name}</h2>
        <p>
          {description
            ? description
            : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates consequuntur qui molestiae corporis nemo inventore"}
        </p>
        <p className=" my-3 bg-indigo-200 p-2 rounded ">
          Time Needed:
          <span className="font-bold text-indigo-600">{timeTake}</span> hours
        </p>
        <button className="w-full py-3 rounded font-bold text-white bg-indigo-600">
          Add To List
        </button>
      </div>
    </div>
  );
};

export default Milestone;

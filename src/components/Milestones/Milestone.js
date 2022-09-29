import React, { useState } from "react";

const Milestone = (props) => {
  const { name, description, image, timeTake } = props.milestone;
  const [buttonText, setButtonText] = useState("Add To List");
  console.log(description);
  const handelButtonText = () => {
    setButtonText("Added in the list");
  };
  return (
    <div>
      <div className="card p-2 bg-gray-800 border border-gray-50 border-opacity-20 rounded h-[480px] flex flex-col justify-between">
        <img className="max-w-full rounded" src={image} alt="" />
        <h2 className="font-bold text-gray-200 mt-5 text-xl mb-2">{name}</h2>
        <p className="text-gray-50">
          {description
            ? description
            : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates consequuntur qui molestiae corporis nemo inventore"}
        </p>
        <p className=" my-3 bg-indigo-200 p-2 rounded ">
          Time Needed:
          <span className="font-bold text-xl text-indigo-600">
            {timeTake}
          </span>{" "}
          hours
        </p>
        <button
          onClick={() => {
            props.handelAddToList(props.milestone);
            handelButtonText();
          }}
          className="w-full py-3 rounded font-bold text-white bg-indigo-600"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Milestone;

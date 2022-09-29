import React from "react";

const Answer = () => {
  return (
    <div>
      <div className=" md:w-3/4 mx-auto p-4 mt-20">
        <h1 className="font-bold text-2xl text-indigo-600 mb-4">
          How does react work?
        </h1>
        <p className="p-3 text-gray-200 bg-gray-700 border-l-4 border-indigo-500 rounded leading-7 text-lg">
          react is a JavaScript libary for building user interface backed by
          facebook. Here is Work flow of react: <br />
          JSX stand for JavaScript XML. and it is a syntax extension to
          JavaScript. we can write our JS code in almost HTML syntax. <br />
          react has a built in compiler called{" "}
          <span className="text-indigo-500">bable</span>. bable take that HTML
          like code and conert it intu pure react code, after that react ceate a{" "}
          <span className="text-indigo-500">virtual DOM</span>. and whenever any
          data on the website change or updated, react compire the previous
          virtual DOM and the current virtual DOM to find out the diffarence
          using a very efficiant alogorithon call{" "}
          <span className="text-indigo-500"> diffing algorithom</span>. and vy
          dooing that, react deyect where to upadte in the real browser DOM.
          <span className="text-indigo-500">
            insted of repaint all the UI, react just repaint the modified or
            update part of the UI and that's make react fast enough
          </span>
        </p>
        {/* second question */}
        <h1 className="font-bold text-2xl text-indigo-600 mt-10 mb-4">
          Diffarecet between props and state
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-indigo-500 p-3 rounded  text-white">
            <h2 className="font-bold text-2xl">Props</h2>
            <ul className="ml-2">
              <li>The Data is passed from one component to another.</li>
              <li>It is Immutable (cannot be modified).</li>
              <li>Props can be used with state and functional components.</li>
              <li>Props are read-only.</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-3 rounded text-gray-100">
            <h2 className="font-bold text-2xl">State</h2>
            <ul className="ml-2">
              <li>The Data is passed within the component only.</li>
              <li>It is Mutable ( can be modified).</li>
              <li>
                State can be used only with the state components/class component
                (Before 16.0).
              </li>
              <li>State is both read and write.</li>
            </ul>
          </div>
        </div>
        {/* third question
         */}

        <h1 className="font-bold text-2xl text-indigo-600 mt-10 mb-4">
          Usecases of useEffect( ) hooks except fetch data
        </h1>
        <p className="p-3 bg-gray-700 border-l-4 border-indigo-500 rounded text-gray-200">
          useEffect is mainly used is side effects, since, react is UI library
          so it's only care about render, re-render UI and react with user
          interaction on the webpage. task we can do using useEffect
          <ul className="ml-2">
            <li>1: updating DOM</li>
            <li>2: setting up subcription </li>
            <li>3: setting up an timer (setInterVal, spcially web-API)</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Answer;

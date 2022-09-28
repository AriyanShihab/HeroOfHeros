import React from "react";

const Answer = () => {
  return (
    <div>
      <div className=" md:w-3/4 mx-auto p-4 mt-20">
        <h1 className="font-bold text-2xl text-indigo-600">
          How does react work?
        </h1>
        <p className="p-3 bg-indigo-200 border-l-4 border-indigo-500 rounded">
          react is a JavaScript libary for building user intrface backed by
          facebook. Here is Work flow of react: <br />
          on the top level overview, react create an virtual DOM, and compire it
          with real browser DOM, and then update only those area where change or
          update haappened! <br />
          JSX is an react Extention , and allow us to write Almost html like
          syntax in Js file. and after that bable complie it to pure js object
          and react display it on the UI There are a lot of advanced topic about
          about react workflow,
          <span className="text-indigo-500">
            reconciliation and rendering, the virtual DOM, the React Diffing
            algorithm,
          </span>{" "}
          are some of them;
        </p>
        {/* second question */}
        <h1 className="font-bold text-2xl text-indigo-600 mt-10 mb-4">
          Diffarecet between props and state
        </h1>
        <div className="flex flex-wrap gap-2">
          <div className="bg-indigo-200 p-3 rounded min-w[50%]">
            <h2 className="font-bold text-2xl">Props</h2>
            <ul className="ml-2">
              <li>difference between stae and props in react</li>
              <li>It is Immutable (cannot be modified).</li>
              <li>Props can be used with state and functional components.</li>
              <li>Props are read-only.</li>
            </ul>
          </div>
          <div className="bg-red-200 p-3 rounded">
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
          use of useEffect (except fetch data)
        </h1>
        <p className="p-3 bg-indigo-200 border-l-4 border-indigo-500 rounded">
          useEffect is a function for dooing the outside task from the code
          base, like: setTimeOut, setInterval, or anything that goes out of the
          code contex, can be handel with useEffecj funtion
        </p>
      </div>
    </div>
  );
};

export default Answer;

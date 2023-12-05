import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([{ task: "Cook Dinner" }]);
  const addTask = () => {};

  const totalTasks = () => {
    console.log("Triggered");
    return tasks.length;
  };

  return (
    <div className="App">
      Total Tasks {totalTasks()}
      <div className="horizontal">
        <input type="text" name="" id="" />
        <div onClick={addTask}>Add</div>
      </div>
      <div>
        {/* use the div element to render tasks */}
        <div>task</div>
      </div>
    </div>
  );
}

export default App;

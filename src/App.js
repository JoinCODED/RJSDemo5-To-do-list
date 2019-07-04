import React from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import "./App.css";

// Data
import tasks from "./data";

//Components
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;

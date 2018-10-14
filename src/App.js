import React, { Component } from "react";

import "../node_modules/font-awesome/css/font-awesome.min.css";

import "./App.css";
import tasks from "./data";

import ToDoList from "./ToDoList";

class App extends Component {
  render() {
    return (
      <div className="rectangle">
        <p className="title">TO DO LIST</p>
        <ToDoList tasks={tasks} />
      </div>
    );
  }
}

export default App;

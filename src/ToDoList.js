import React, { Component } from "react";

import "./App.css";

// Components
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  const taskRows = props.tasks.map(task => (
    <ToDoItem task={task} key={task.task} />
  ));

  return (
    <table className="table">
      <thead>
        <tr className="headerRow">
          <th>STATUS</th>
          <th>TASK</th>
          <th>PRIORITY</th>
        </tr>
      </thead>
      <tbody>{taskRows}</tbody>
    </table>
  );
}
export default ToDoList;

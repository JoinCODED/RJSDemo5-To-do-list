import React, { Component } from "react";

import "./App.css";

import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  render() {
    let taskRows = this.props.tasks.map(task => (
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
}
export default ToDoList;

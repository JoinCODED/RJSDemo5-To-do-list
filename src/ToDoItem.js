import React, { Component } from "react";

import "./App.css";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: this.props.task.done
    };
  }

  clicked = () => {
    this.setState({ done: !this.state.done });
  };
  render() {
    console.log(this.props.task);
    const task = this.props.task;
    let statusIcon;

    if (this.state.done) {
      statusIcon = "fa fa-check-circle";
    } else {
      statusIcon = "fa fa-times-circle";
    }

    return (
      <tr className="row">
        <td onClick={this.clicked}>
          <i className={statusIcon} />
        </td>
        <td>{task.task}</td>
        <td className={task.priority}>{task.priority.toUpperCase()}</td>
      </tr>
    );
  }
}

export default ToDoItem;

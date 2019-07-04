import React, { Component } from "react";

import "./App.css";

class ToDoItem extends Component {
  state = {
    done: this.props.task.done
  };

  handleClick = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    const task = this.props.task;
    const statusIcon = done => {
      if (done) {
        return "fa fa-check-circle";
      } else {
        return "fa fa-times-circle";
      }
    };

    return (
      <tr className="row">
        <td onClick={this.handleClick}>
          <i className={statusIcon(this.state.done)} />
        </td>
        <td>{task.task}</td>
        <td className={task.priority}>{task.priority.toUpperCase()}</td>
      </tr>
    );
  }
}

export default ToDoItem;

import React, { Component } from "react";
import axios from "axios";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

//Components
import ToDoList from "./ToDoList";

class App extends Component {
  state = {
    tasksFromAPI: []
  };

  async componentDidMount() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/list/");
      const tasks = response.data;
      this.setState({ tasksFromAPI: tasks });
    } catch (err) {
      console.error("SOMETHING WENT WRONG: ");
      console.error(err);
    }
  }

  render() {
    return (
      <div className="rectangle">
        <p className="title">TO DO LIST</p>
        <ToDoList items={this.state.tasksFromAPI} />
      </div>
    );
  }
}

export default App;

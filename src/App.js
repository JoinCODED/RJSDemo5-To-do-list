import React, { Component } from "react";
import axios from "axios";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

//Components
import ToDoList from "./ToDoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksFromAPI: []
    };
  }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/list/")
      .then(response => response.data)
      .then(tasksFromAPI => this.setState({ tasksFromAPI: tasksFromAPI }));
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

import React, { Component } from "react";

import "./App.css";
import Todos from "./Components/Todos";
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "feed dog",
        completed: false,
      },
      {
        id: 3,
        title: "dinner with wife",
        completed: false,
      },
    ],
  };
  markComplete = (id) => {
    this.setState({
      tods: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;

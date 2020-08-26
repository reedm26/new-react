import React, { Component } from "react";

import "./App.css";
import Todos from "./Components/Todos";
import Header from "./Components/layout/Header";
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
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;

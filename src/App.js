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
}
function App() {
  return (
    <div className="App">
      <Todos todos={this.state.todos} />
    </div>
  );
}

export default App;

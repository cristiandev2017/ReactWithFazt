import React, { Component } from "react";
import "./App.css";
//Al llamarlo asi se guarda en una variable(tasks) y se puede usar en el transcurso del programa
import tasks from "./sample/tasks.json";

console.log(tasks);

class App extends Component {
  state = {
    tasks: tasks,
  };

  render() {
    return (
      <div>
        {this.state.tasks.map((e) => (
          <p key={e.id}>{e.title} - {e.description} - {e.done} - {e.id}</p>
        ))}
      </div>
    );
  }
}

export default App;

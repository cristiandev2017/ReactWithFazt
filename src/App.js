import React, { Component } from "react";
import "./App.css";
//Al llamarlo asi se guarda en una variable(tasks) y se puede usar en el transcurso del programa
import tasks from "./sample/tasks.json";
import Tasks from "./components/Tasks";

class App extends Component {
  state = {
    tasks: tasks,
  };

  render() {
    return (
      <div>
        <Tasks tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;

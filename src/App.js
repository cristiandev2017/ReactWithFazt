import React, { Component } from "react";
import "./App.css";
//Al llamarlo asi se guarda en una variable(tasks) y se puede usar en el transcurso del programa
import tasks from "./sample/tasks.json";

//Components
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";

class App extends Component {
  state = {
    tasks: tasks,
  };

  render() {
    return (
      <div>
        <TaskForm />
        <Tasks tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class Task extends Component {
  render() {
    //Realizo destructuring evitando escribir varias veces la variable
    const { task } = this.props;

    return (
      <div>
        {task.title} - {task.description}
        {task.done} - {task.id}
        <input type="checkbox" />
        <button>x</button>
      </div>
    );
  }
}

export default Task;

import React, { Component } from "react";

class TaskForm extends Component {
  //Este me permitira tener los valores de mi componente
  state = {
    title: "",
    description: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.title, this.state.description)
  };

  onChange = (e) => {
    //Reflejare los cambios se pone en cuadrados para identificar
    this.setState({
      [e.target.name] : e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write a task"
          onChange={this.onChange}
          value={this.state.title}
        ></input>
        <br />
        <br />
        <textarea
          name="description"
          placeholder="Write a Description"
          onChange={this.onChange}
          value={this.state.description}
        ></textarea>
        <br />
        <input type="submit"></input>
      </form>
    );
  }
}

export default TaskForm;

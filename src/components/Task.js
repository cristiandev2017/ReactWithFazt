import React, { Component } from "react";
import PropTypes from 'prop-types';

class Task extends Component {

  StyleCompleted(){
    return{
      fontSize: '20px',
      color: this.props.task.done ?'gray':'black',
      textDecoration: this.props.task.done ? 'line-through':'none'
    }
  }


  render() {
    //Realizo destructuring evitando escribir varias veces la variable
    const { task } = this.props;
    //const redColor = { background: "red" };

    return (
      <p style={this.StyleCompleted()}>
        {task.title} - {task.description}
        {task.done} - {task.id}
        <input type="checkbox" />
        <button style={btnDelete}>x</button>
      </p>
    );
  }
}

//Se utiliza proptypes para especificar los tipos de parametros (props) que recibiré
Task.propTypes ={
  task: PropTypes.object.isRequired
}

//Con esto se estiliza el boton pero por medio de una constante y un objeto
const btnDelete = {
  fontSize: "18px",
  background: "#ea2027",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  borderRadius: '50%',
  cursor: "pointer"
};

export default Task;

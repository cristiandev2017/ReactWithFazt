import React from "react";
import "./App.css";

class Helloworld extends React.Component {
  //Empezaremos a usar state, el cual me permite almacenar datos
  state = {
    //Nos permite ocultar y mostrar datos
    show: true,
  };

  //Se creara un metodo en la clase
  toggleShow= () =>{
    this.setState({show:!this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          {/* Aca se agrega un evento para cambiar por medio de state */}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      );
    }else{
      return <h1>There are not elements <button onClick={this.toggleShow}>Toggle Show</button> </h1>
              
    }
  }
}

//Lo llamo las veces que lo necesite, mas adelante se vera que se pueden cambiar sus propiedades con props
function App() {
  return (
    //Usaremos las propiedades o props
    <div>
      This is my component:{" "}
      <Helloworld mytext="Hello Cristian" subtitle="loremp ispum" />
      <Helloworld mytext="Hola Mundo" subtitle="Otro subtitulo" />
      <Helloworld mytext="Hola Cristian" subtitle="Tercer subtitulo" />
    </div>
  );
}

export default App;

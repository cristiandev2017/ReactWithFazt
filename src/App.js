import "./App.css";

//Se define como props para utilizar las propiedades.
function Helloworld(props) {
  //Probaremos por console log como recibimos los props
  console.log(props);
  return (
    //me lo trae como un objeto y luego de esto me permite acceder a el en este caso solo tendremos de props mytext y tambien subtitle
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
}

//Lo llamo las veces que lo necesite, mas adelante se vera que se pueden cambiar sus propiedades con props
function App() {
  return (
    //Usaremos las propiedades o props
    <div>
      This is my component:{" "}
      <Helloworld mytext="Hello Cristian" subtitle="loremp ispum" />
      <Helloworld mytext="Hola Mundo" subtitle="Otro subtitulo"/>
      <Helloworld mytext="Hola Cristian" subtitle="Tercer subtitulo"/>
    </div>
  );
}

export default App;

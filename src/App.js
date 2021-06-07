import './App.css';

//Estoy creando otro componente
function Helloworld()
{
  return (
    <div id="hello">Component Helloworld</div>
  )
}

//Lo llamo las veces que lo necesite, mas adelante se vera que se pueden cambiar sus propiedades con props
function App() {
  return (
    <div>This is my component: <Helloworld/><Helloworld/><Helloworld/></div>
  );
}

export default App;

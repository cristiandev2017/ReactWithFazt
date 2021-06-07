import './App.css';

//Estoy creando otro componente
function Helloworld()
{
  return (
    <div id="hello">Component Helloworld</div>
  )
}

//Otra manera de crear un componente es por medio de una constante que creera una funcion de flecha la diferencia es que el return se obvia en este caso aunque se podria escribir 
const App = () => <div>This is my component: <Helloworld /></div>

//Otra forma de crearlo es por medio de una clase pero normalmente se hereda de react el component extendiendolo, el render me permite retornar ya que una clase no me permite hacerlo con su declaración
class App extends React.Component {
  render(){
    return <div>This is my component: <Helloworld></Helloworld></div>
  }
}

//Lo llamo las veces que lo necesite, mas adelante se vera que se pueden cambiar sus propiedades con props
function App() {
  return (
    <div>This is my component: <Helloworld/><Helloworld/><Helloworld/></div>
  );
}

export default App;

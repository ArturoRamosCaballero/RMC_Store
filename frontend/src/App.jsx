import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {


  // const note = [
  //  
  // ];

  // const titulosApp ={
  //   tituloApp: "soy titulo",
  //   subtituloApp: "Soy subtitulo"
  // }
  // {...titulosApp}

  return (
    <section className="containerTodoApp">
      <TodoApp></TodoApp> {/* componente hijo*/}
      <TodoApp></TodoApp> {/* componente hijo*/}
    </section>
  );
}

export default App;
//exporta el componente app a main ya que se esta renderizando en el main

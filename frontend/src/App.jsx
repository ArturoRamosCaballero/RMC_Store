import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  const note = [
    {
      id: crypto.randomUUID(),
      text: "Soy nota 1",
    },
    {
      id: crypto.randomUUID(),
      text: "Soy nota 2",
    },
  ];

  // const titulosApp ={
  //   tituloApp: "soy titulo",
  //   subtituloApp: "Soy subtitulo"
  // }
  // {...titulosApp}

  return (
    <section className="containerTodoApp">
      <TodoApp note={note} ></TodoApp> {/* componente hijo*/}
    </section>
  );
}

export default App;
//exporta el componente app a main ya que se esta renderizando en el main

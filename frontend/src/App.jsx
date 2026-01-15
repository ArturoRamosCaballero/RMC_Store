import TodoApp from "./components/TodoApp";
import "./index.css";
function App() {

  return (
    <section className="containerTodoApp">
      <TodoApp></TodoApp> {/* componente hijo*/}
    </section>
  );
}

export default App;
//exporta el componente app a main ya que se esta renderizando en el main

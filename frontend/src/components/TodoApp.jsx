import { useState } from "react";

function TodoApp() {
  const [notes, setNotes] = useState([
    {
      id: crypto.randomUUID(),
      text: "Soy nota 1",
    },
    {
      id: crypto.randomUUID(),
      text: "Soy nota 2",
    },
  ]);

  return (
    <>
      <h1>Notes</h1>
    </>
  );
}

export default TodoApp;

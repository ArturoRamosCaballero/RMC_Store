function TodoApp({note,tituloApp,subtituloApp}) {
    console.log(subtituloApp);
    console.log(tituloApp);
    
    return (
    <>
      <h1>App de notas</h1>
      <ul>
        <li>{note[0].text}</li>
        <li>{note[1].text}</li>
      </ul>
    </>
  );
}

export default TodoApp;

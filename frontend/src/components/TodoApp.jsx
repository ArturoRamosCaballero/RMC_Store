import styles from "./TodoApp.module.css";
import { useState,useEffect } from "react";

function TodoApp() {

  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await fetch("http://localhost:3000/notes");
        if(!response.ok){
          throw new Error ("Error en la solicitud ${response.status}")
        }
      const data = await response.json();
      setNotes(data);
      }catch(error){
      console.log(error)
    }
    };
    fetchData();
  },[]);

  return (
    <>
      <h1 className={styles.title_Notes}>Note</h1>
      <ul className={styles.notes}>
        {notes.map((note) => (
          <li className={styles.notesItem} key={note.id}>{note.text}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoApp;

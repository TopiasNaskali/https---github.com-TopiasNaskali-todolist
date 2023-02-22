// IMPORTOIDAAN JÄRJESTELMÄ OLIO
import React, { useState } from "react";
import '../App.css';

// JOKAISESSA TIEDOSTOSSA SAA JA PITÄÄ OLLA YKSI EXPORT DEFAULT
export default function Todolist() {
  // STATE YKSITTÄISEN TODO-ITEMIN SISÄLLÖKSI
  // STATE VAIHTOEHDOT ON '', 0 tai []
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState("");

  const addTodo = () => {
    //console.log("ADD TODO");
    // SPREAD NOTAATIOLLA PYSTYY LISÄÄMÄÄN TAULUKKOON YHDEN SOLUN
    const newTodo = { date: date, description: todo };
    setTodos([...todos, newTodo]);
    setTodo("");
    setDate("");
  };
  return (
    <div>
        <h2>Add todo:</h2>
        <div className="otsikko1">
            Date:
            <input placeholder="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}>


            </input>
        </div>
        <div className="otsikko">
            Description:
            <input
            placeholder="description"
            value={todo}
            onChange = {(event) => setTodo(event.target.value)}/>
            
            <button onClick={addTodo}>Add</button>
        </div>
        <table>
            <thead>
                <th>Date</th>
                <th>Description</th>
            </thead>
            <tbody>
                {todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

  );
}

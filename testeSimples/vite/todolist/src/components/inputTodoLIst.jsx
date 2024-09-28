import { useState } from "react";
import "./index.css";

export function InputTodoList() {
    const [tasks, setTasks] = useState([]);
    const [eventInput, setEventInput] = useState('');

    function handleInput(e) {
        e.preventDefault();
       if(eventInput.trim() !== '') {
        setTasks([...tasks, eventInput]);
        setEventInput('');  
       }
    }

    function handleRemove(index) {
        const novaTodolist = tasks.filter((_, i) => i !== index);
        setTasks(novaTodolist);
    }            

    return (
        <>
            <header>
                <h1>Todolist</h1>

                <section className="form-container">
                    <form id="formID" onSubmit={handleInput}>
                        <input 
                            type="text" 
                            placeholder="#todolist"
                            value={eventInput}
                            onChange={(e) => setEventInput(e.target.value)}
                        />

                        <button type="submit">Criar</button>
                    </form> 
                </section>
            </header>

            <main className="main-container">
                <ul>
                    {tasks.map((items, index) => (
                        <li key={index}>
                            {items}

                            <button onClick={() => handleRemove(index)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}
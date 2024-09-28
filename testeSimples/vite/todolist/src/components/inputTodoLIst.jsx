import { useState } from "react";
import "./index.css";

export function InputTodoList() {
    const [eventInput, setEventInput] = useState('');

    function handleInput(e) {
        e.preventDefault();
       if(eventInput.trim() !== '') {
        console.log(eventInput)
        setEventInput('')
       }
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

        </>
    )
}
import React, { useState } from "react";
import './NewTodoForm.css';

function NewTodoForm(props){
    const { addTodo } = props;

    const [newTodo, setNewTodo] = useState("");

    function handleChange(evt){
        setNewTodo(evt.target.value);
    }

    function handleAdd(evt){
        evt.preventDefault();
        
        addTodo(newTodo);

        setNewTodo("");

    }

    return(
        <div className="NewTodoForm">
            <h2>New Todo</h2>
            <form>
                <input type="text" placeholder="New Todo" 
                    value={newTodo} 
                    onChange={handleChange} ></input>
                <button disabled={!newTodo} 
                        onClick={handleAdd} >ADD TODO</button>
            </form>
        </div>
    )
}

export default NewTodoForm;
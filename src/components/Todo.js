import React, { useState } from "react";
import './Todo.css';

function Todo(props){
    const { id, todo, editTodo } = props;

    const [editing, setEditing] = useState(false);
    const [todoState, setTodoState] = useState({id: id, todo: todo});

    function handleEditing(evt){
        setEditing(true)
    }

    function handleEdit(evt){
        setTodoState(currSt => ( {...currSt, todo: evt.target.value}))
    }

    function handleSave(evt){
        evt.preventDefault();
        editTodo(todoState);
        setEditing(false);
    }

    const todoLabel = 
        <div className="Todo">
            <div className="Todo-label" id={id}>{todoState.todo}</div>
            <i data-testid="editForm" className="fa-solid fa-pencil" onClick={handleEditing}></i>
            <i className="fa-solid fa-trash"></i>
        </div>;

    const todoEdit = 
        <div className="Todo">
            <form>
                <input className="Todo-editInput" type="text" 
                        defaultValue={todoState.todo}
                        onChange={handleEdit}></input>
                <button data-testid="editSave" className="Todo-editButton" onClick={handleSave}>Edit</button>
            </form>
        </div>
    return ( editing ? todoEdit : todoLabel );
}

export default Todo;
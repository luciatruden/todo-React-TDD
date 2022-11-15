import React from "react";
import './Todo.css';

function Todo(props){
    const { id, todo } = props;

    return (
        <div className="Todo">
            <div className="Todo-label" id={id}>{todo}</div>
            <i class="fa-solid fa-pencil"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
    );
}

export default Todo;
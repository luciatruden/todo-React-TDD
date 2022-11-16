import React, { useState } from "react";
import Todo from "./components/Todo";
import './TodoList.css';

function TodoList(props) {

    return (
        <div className="TodoList">
            <Todo id={345} todo="make beds" />
            <Todo id={676} todo="clean windows" />
            <Todo id={123} todo="wash curtains" />
            <Todo id={455} todo="go to gym" />
        </div>
    )
}

export default TodoList;
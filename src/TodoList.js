import React, { useState } from "react";
import Todo from "./components/Todo";
import './TodoList.css';

function TodoList(props) {

    const [todoList, setTodoList] = useState({todos: [
                                                {id: 345, todo: "make beds"},
                                                {id: 567, todo: "clean windows"},
                                                {id: 123, todo: "go shopping"},
                                                {id: 876, todo: "go to gym"},
                                            ]})

    function handleEdit(todo){

        console.log("edit")

    }

    return (
        <div className="TodoList">
            {todoList.todos.map((td) => 
                    ( <Todo id={td.id} todo={td.todo} handleEdit={handleEdit}/> )
             )}
            
        </div>
    )
}

export default TodoList;
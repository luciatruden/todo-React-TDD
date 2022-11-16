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

    function editTodo(todo){

        console.log("edit")
        console.log(todo);
        setTodoList(currSt => ({...currSt, todos: currSt.todos.map( 
                                        (td) => (td.id === todo.id 
                                            ? {...td, todo: todo.todo} 
                                            : td)
        ) }))

    }

    return (
        <div className="TodoList">
            <h1> Todo List </h1>
            {todoList.todos.map((td) => 
                    ( <Todo id={td.id} todo={td.todo} editTodo={editTodo}/> )
             )}
            
        </div>
    )
}

export default TodoList;
import React, { useState } from "react";
import Todo from "./Todo";
import './TodoList.css';
import { v4 as uuidv4 } from "uuid";

function TodoList(props) {

    const [todoList, setTodoList] = useState({todos: [
                                                {id: uuidv4(), todo: "make beds"},
                                                {id: uuidv4(), todo: "clean windows"},
                                                {id: uuidv4(), todo: "go shopping"},
                                                {id: uuidv4(), todo: "go to gym"},
                                            ]})

    function editTodo(todo){
        setTodoList(currSt => ({...currSt, todos: currSt.todos.map( 
                                        (td) => (td.id === todo.id 
                                            ? {...td, todo: todo.todo} 
                                            : td)
        ) }))
    }

    function deleteTodo(todo){
        setTodoList(currSt => ({...currSt, todos: currSt.todos.filter(
                                        (td) => (td.id !== todo.id )
        )}))
    }

    return (
        <div className="TodoList">
            <h1> Todo List </h1>
            {todoList.todos.map((td) => 
                    ( <Todo key={td.id} id={td.id} todo={td.todo} editTodo={editTodo} deleteTodo={deleteTodo} /> )
             )}
            
        </div>
    )
}

export default TodoList;
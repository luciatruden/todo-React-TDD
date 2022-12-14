import React, { useState } from "react";
import Todo from "./Todo";
import './TodoList.css';
import { v4 as uuidv4 } from "uuid";
import NewTodoForm from "./NewTodoForm";

function TodoList(props) {

    const { todos } = props;

    const todoObjects = todos.map((td) => ({id: uuidv4(), todo: td}));
    const [todoList, setTodoList] = useState({todos: todoObjects});


    // const [todoList, setTodoList] = useState({todos: [
    //                                             {id: uuidv4(), todo: "make beds"},
    //                                             {id: uuidv4(), todo: "clean windows"},
    //                                             {id: uuidv4(), todo: "go shopping"},
    //                                             {id: uuidv4(), todo: "go to gym"},
    //                                         ]})

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

    function addTodo(todoLabel){

        const newTodo = {id: uuidv4(), todo: todoLabel};

        console.log(newTodo);
        console.log("addTodo in TodoList")
        setTodoList(currSt => ({...currSt, todos: [...currSt.todos, newTodo]}))
    }

    return (
        <div className="TodoList">
            <h1> Todo List </h1>
            {todoList.todos.map((td) => 
                    ( <Todo key={td.id} id={td.id} todo={td.todo} editTodo={editTodo} deleteTodo={deleteTodo} /> )
             )}
            <NewTodoForm addTodo={addTodo} />
        </div>
    )
}

export default TodoList;
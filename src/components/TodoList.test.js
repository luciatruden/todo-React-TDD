import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TodoList from "./TodoList";

describe('TodoList', () => {
    function renderTodoListScreen(){
        const todos = ["make beds", "clean windows", "go shopping", "go to gym", "keep learning"]
        render(<TodoList todos={todos} /> );

        return {
            todos:              todos,
            heading:            screen.getByText(/todo list/i),
            newTodoForm:        screen.getByPlaceholderText("New Todo"),
            allDeleteButtons:   screen.getAllByTestId("delete"),
            editForm:           screen.getAllByTestId("editForm")
        };
    }

    test("title should be rendered", () => {
        const { heading } = renderTodoListScreen();

        expect(heading).toBeInTheDocument();
    });

    test("new todo form should be rendered", () => {
        const { newTodoForm } = renderTodoListScreen();
    
        expect(newTodoForm).toBeInTheDocument();
    });

    test("on delete, todo should be removed", () => {
        const { allDeleteButtons, todos } = renderTodoListScreen();
    
        //clicks on trash icon
        fireEvent.click(allDeleteButtons[0]);
    
        expect(screen.getAllByTestId("editForm").length).toBe(todos.length-1);
    });
})



// test("list of todos should be rendered", () => {
//     const todos = ["make beds", "clean windows", "go shopping", "go to gym", "keep learning"]
//     render(<TodoList todos={todos} />);

//     //Check the number of todos matches the length of the todos array in props
//     expect(screen.getAllByTestId("editForm").length).toBe(todos.length);

//     //Check that the first item in the list matches too
//     getTodoItems() {
//         return screen.getAllByTestId("todoLabel")
//             .map((elem) => ({
                
//             })
//             )
//     }
// });





/**
 * 
 
 * 
 * on edit, todo should change
 * on add, todo should be added
 * 
 * 
 */
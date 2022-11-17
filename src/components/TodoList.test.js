import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TodoList from "./TodoList";

describe('TodoList', () => {
    function renderTodoListScreen(){
        const todos = ["make beds", "clean windows", "go shopping", "go to gym", "keep learning"]
        render(<TodoList todos={todos} /> );

        return {
            todos:              todos,
            heading:            screen.getByText(/todo list/i),
            newTodoInput:       screen.getByPlaceholderText("New Todo"),
            addTodoButton:      screen.getByText(/add todo/i),
            allDeleteButtons:   screen.getAllByTestId("delete"),
            allEditForms:       screen.getAllByTestId("editForm"),
    
        };
    }


    it("renders the title", () => {
        const { heading } = renderTodoListScreen();

        expect(heading).toBeInTheDocument();
    });

    it("renders the list of todos", () => {
        const { allEditForms, todos} = renderTodoListScreen();
    
        //Check the number of todos matches the length of the todos array in props
        expect(allEditForms.length).toBe(todos.length);
    
        //check each todo in list is found on display
        todos.map((td) => (expect(screen.getByText(td)).toBeInTheDocument()))
        
    });
    

    it("renders the new todo form", () => {
        const { newTodoInput } = renderTodoListScreen();
    
        expect(newTodoInput).toBeInTheDocument();
    });

    it("removes a todo when its delete is clicked", () => {
        const { allDeleteButtons, todos } = renderTodoListScreen();
    
        //clicks on trash icon of first item in todos list
        fireEvent.click(allDeleteButtons[0]);
        
        //must generate elements again to capture changes
        //check the number of todos is one less than before
        expect(screen.getAllByTestId("editForm").length).toBe(todos.length-1);

        //check the text in todos[0] is not found
        expect(screen.queryByText(todos[0])).not.toBeInTheDocument();
    });

    it("changes todo when edited", () => {
        const { allEditForms, todos } = renderTodoListScreen();
        const testTodo = "testTodo";

        //click on edit button for first todo
        fireEvent.click(allEditForms[0]);

        //get input element for first todo and change its value
        const editInput = screen.getByPlaceholderText(todos[0]);
        fireEvent.change(editInput, { target: {value: testTodo}});

        //click on button to save editted todo
        const editButton = screen.getByTestId("editSave");
        fireEvent.click(editButton);

        //check that previous label is not in document
        expect(screen.queryByText(todos[0])).not.toBeInTheDocument();
        //check new label is in document
        expect(screen.getByText(testTodo)).toBeInTheDocument();
    })

    it("adds new todo to list", () => {
        const { todos, newTodoInput, addTodoButton } = renderTodoListScreen();

        const newTodo = "testTodo";

        //change input on NewTodo form
        fireEvent.change(newTodoInput, { target: { value: newTodo } });

        //click ADD TODO
        fireEvent.click(addTodoButton);

        //check there is one more todo in the list than before
        expect(screen.getAllByTestId("delete").length).toBe(todos.length + 1);

        //check the test todo is found in the document
        expect(screen.getByText(newTodo)).toBeInTheDocument();
        
    })
})








/**
 * 
 
 *
 * on add, todo should be added
 * 
 * 
 */
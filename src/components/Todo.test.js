import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./Todo";

describe('Todo', () => {
    function renderTodoScreen() {
        const id = "234";
        const todo = "wash towels";

        //mock functions
        const editTodo = jest.fn();
        const deleteTodo = jest.fn();

        render(<Todo id={id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />);
        //<Todo id={id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />

        return( {
            todo:           todo,
            label:          screen.queryByText(todo),
            editForm:       screen.queryByRole("form"),
            pencilButton:   screen.getByTestId("editForm"),
            deleteButton:   screen.getByTestId("delete"),
            editTodo,
            deleteTodo
        });

    }

    it("renders the todo's label", () => {
        const { label } = renderTodoScreen();
    
        expect(label).toBeInTheDocument();
    })

    it("does not render the edit form for the todo", () => {
        const { editForm } = renderTodoScreen();
    
        expect(editForm).not.toBeInTheDocument();
    })

    it("does not render the todo label while editing", () => {
        const { label, pencilButton } = renderTodoScreen();
    
        // fire clicking on Edit button
        fireEvent.click(pencilButton);
    
        expect(label).not.toBeInTheDocument();
    
    })

    it("renders edit form after clicking on pencil button", () => {
        const { pencilButton } = renderTodoScreen();
    
        // fire clicking on pencil button
        fireEvent.click(pencilButton);
    
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    })

    it("displays todo label in edit input box", () => {
        const { todo, pencilButton } = renderTodoScreen();
    
        // fire clicking on pencil button
        fireEvent.click(pencilButton);
    
        expect(screen.getByRole("textbox").value).toBe(todo);
    })

    it("changes todo label in input textbox", () => {
        const { pencilButton } = renderTodoScreen();
    
        const newTodo = "test";
    
        // fire clicking on pencil button
        fireEvent.click(pencilButton);
    
        // fire changing of todo text
        const editInputElem = screen.getByRole("textbox");
        fireEvent.change(editInputElem, { target: { value: newTodo } });
        
        expect(editInputElem.value).toBe(newTodo);
    })

    it("does not render todo Edit form after edited todo is saved", () => {
        const { pencilButton, editTodo} = renderTodoScreen();
    
        // fire clicking on pencil button
        fireEvent.click(pencilButton);
    
        //fire clicking on Edit button
        fireEvent.click(screen.getByTestId("editSave"));
    
        expect(editTodo).toBeCalledTimes(1);
        expect(screen.queryByRole("form")).not.toBeInTheDocument();
    })

    it("does not render todo when delete button is clicked",  () => {
        const { deleteButton, deleteTodo } = renderTodoScreen();
    
        //fire clicking on trash button
        fireEvent.click(deleteButton);
    
        //deleteTodo function called
        expect(deleteTodo).toBeCalledTimes(1);
    
    })

    it("displays todo label with text-decoration-line set to none", () => {
        const { label } = renderTodoScreen();

        expect(label).not.toHaveStyle({textDecorationLine: "line-through"});

    })

    it("crosses out todo label when clicked on", () => {
        const { label } = renderTodoScreen();

        fireEvent.click(label);
        expect(label).toHaveStyle({textDecorationLine: "line-through"});
    })
})










import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

test("new todo input should be rendered", () => {
    render(<NewTodoForm />);
    const newTodoInputElem = screen.getByPlaceholderText(/new todo/i);
    expect(newTodoInputElem).toBeInTheDocument();
});

test("Add todo button should be rendered", () => {
    render(<NewTodoForm />);
    expect(screen.getByRole("button")).toBeInTheDocument();
});

test("new todo input should be empty", () => {
    render(<NewTodoForm />);
    const newTodoInputElem = screen.getByPlaceholderText(/new todo/i);
    expect(newTodoInputElem.value).toBe("");
});

test("button should be disabled when there is no input", () => {
    render(<NewTodoForm />);
    expect(screen.getByRole("button")).toBeDisabled();
});

test("new todo input should change", () => {
    render(<NewTodoForm />);
    const testValue = "test";
    const newTodoInputElem = screen.getByPlaceholderText(/new todo/i);

    fireEvent.change(newTodoInputElem, { target: { value: testValue } });
    expect(newTodoInputElem.value).toBe(testValue);
});

test("button should not be disabled when input exists", () => {
    render(<NewTodoForm />);
    
    const testValue = "test";
    const newTodoInputElem = screen.getByPlaceholderText(/new todo/i);
    fireEvent.change(newTodoInputElem, { target: { value: testValue } });

    expect(screen.getByRole("button")).not.toBeDisabled();
});

const addTodo =  jest.fn();

test("new todo input should be empty after button clicked", async () => {
    render(<NewTodoForm addTodo={addTodo} />);
    const addTodoButtonElem = screen.getByRole("button");
    
    //change the new todo input
    const testValue = "test";
    const newTodoInputElem = screen.getByPlaceholderText(/new todo/i);
    fireEvent.change(newTodoInputElem, { target: { value: testValue } });

    //click on add todo button
    fireEvent.click(addTodoButtonElem);

    //await waitFor(() => (expect(newTodoInputElem.value).toBe("")));
    expect(addTodo).toBeCalledTimes(1);
    expect(newTodoInputElem.value).toBe("");

});

/**
 *  
 * 
 * (db - async - loading should be rendered when button clicked)?
 * (db - async - loading should not be rendered after updating data)?
 * 
 */
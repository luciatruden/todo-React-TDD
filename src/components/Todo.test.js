import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./Todo";

// jest.mock('../__mocks__/TodoList', () => ({
//     __esModule:true,
//     default: {
//         editTodo: (todo) => ( console.log("mock" + todo))
//     }
// }));

//jest.mock('../__mocks__/TodoList')



test("todo label should be rendered", () => {
    const id = "234";
    const todo = "wash towels";
    render(<Todo id={id} todo={todo} />);

    const todoLabelElem = screen.queryByText(todo);
    expect(todoLabelElem).toBeInTheDocument();
})

test("todo label should display todo", () => {
    const id = "234";
    const todo = "wash towels";
    render(<Todo id={id} todo={todo} />);

    const todoLabelElem = screen.queryByText(todo);
    expect(todoLabelElem).toHaveTextContent(todo);
})

test("todoEdit should not be rendered", () => {
    const id = "234";
    const todo = "wash towels";
    render(<Todo id={id} todo={todo} />);

    expect(screen.queryByRole("form")).not.toBeInTheDocument();
})

test("todo label should not be rendered while editing", () => {
    const id = "234";
    const todo = "wash towels";
    render(<Todo id={id} todo={todo} />);

    // fire clicking on Edit button
    fireEvent.click(screen.getByTestId("editForm"));

    expect(screen.queryByText(todo)).not.toBeInTheDocument();
})

test("todo edit form should be rendered while editing", () => {
    const id = "234";
    const todo = "wash towels";
    render(<Todo id={id} todo={todo} />);

    // fire clicking on pencil button
    fireEvent.click(screen.getByTestId("editForm"));

    expect(screen.getByRole("textbox")).toBeInTheDocument();
})

test("todo edit form should display todo", () => {
    const id = "234";
    const todo = "wash towels";
    render(<Todo id={id} todo={todo} />);

    // fire clicking on pencil button
    fireEvent.click(screen.getByTestId("editForm"));

    expect(screen.getByRole("textbox").value).toBe(todo);
})


test("todo label should change when edited", () => {
    const id = "234";
    const todo = "wash towels";
    render(<Todo id={id} todo={todo} />);

    const newTodo = "test";

    // fire clicking on pencil button
    fireEvent.click(screen.getByTestId("editForm"));

    // fire changing of todo text
    const editInputElem = screen.getByRole("textbox");
    fireEvent.change(editInputElem, { target: { value: newTodo } });
    
    expect(editInputElem.value).toBe(newTodo);
})


const editTodo = jest.fn();

test("todoEdit should not be rendered after edit saved", () => {
    const id = "234";
    const todo = "wash towels";
    render(<Todo id={id} todo={todo} editTodo={editTodo} />);

    // fire clicking on pencil button
    fireEvent.click(screen.getByTestId("editForm"));

    //fire clicking on Edit button
    fireEvent.click(screen.getByTestId("editSave"));

    expect(editTodo).toBeCalledTimes(1);
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
})






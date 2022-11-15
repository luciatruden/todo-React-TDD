import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

test("todo label should be rendered", () => {
    const id = "234";
    const todo = "wash towels";
    render(<Todo id={id} todo={todo} />);

    const todoLabelElem = screen.getByText(todo);
    expect(todoLabelElem).toBeInTheDocument();
})
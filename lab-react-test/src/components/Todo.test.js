import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer'

import Todo from "./Todo";

describe('components: Todo', () => {
  const todo = { id: 1, title:'all wash car', completed: false}
  it('should be in DOM', async() => {
    render(<Todo todo={todo} />);
    const element = await screen.findByTestId('todo-1')
    expect(element).toBeInTheDocument()
  })
  it('should have text from todo.title', async() => {
    render(<Todo todo={todo} />)
    const element = await screen.findByTestId('todo-1')
    expect(element).toHaveTextContent(todo.title)
  })
  it('should have strike tag if completed', async() => {
    const todo = { id: 2, title:'all wash dishes', completed: true }
    render(<Todo todo={todo} />)
    const element = await screen.findByTestId('todo-2')
    expect(element).toContainHTML(`<strike>${todo.title}</strike>`)
  })
  it('should have strike tag if not completed', async() => {
    const todo = { id: 3, title:'wash desk', completed: false }
    render(<Todo todo={todo} />)
    const element = await screen.findByTestId('todo-3')
    expect(element).not.toContainHTML(`<strike>${todo.title}</strike>`)
  })

  it('should match snapshot', () => {
    const todo = { id: 3, title:'wash desk', completed: false }
    const element = renderer.create(<Todo todo={todo} />)

    const elementAsJson = element.toJSON();
    expect(elementAsJson).toMatchSnapshot()
  })
  it('should match snapshot', () => {
    const todo = { id: 3, title:'wash desk', completed: true }
    const element = renderer.create(<Todo todo={todo} />)

    const elementAsJson = element.toJSON();
    expect(elementAsJson).toMatchSnapshot()
  })
})
export default function Todo({ todo }){
  const text = todo.completed ? <strike>{todo.title}</strike> : todo.title
  return (
    <div data-testid={`todo-${todo.id}`} >{text}</div>
  )
}
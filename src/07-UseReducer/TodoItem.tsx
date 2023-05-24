import { ReducerInitValue } from "./Reducer.interface"

interface Props {
  todo: ReducerInitValue,
  onDeleteTodo: (todo: ReducerInitValue) => void,
  onToggleTodo: (todo: ReducerInitValue) => void,
}
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }: Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center "  >
      <span
      className={` ${ todo.done ? 'text-decoration-line-through ' : '' } `}
        onClick={() => onToggleTodo(todo)}
      >
        {todo.todo}
      </span>
      <button onClick={() => onDeleteTodo(todo)} className="btn btn-danger">Borrar</button>
    </li>
  )
}

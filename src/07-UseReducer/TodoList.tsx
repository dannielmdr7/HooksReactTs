import { ReducerInitValue } from "./Reducer.interface"
import { TodoItem } from "./TodoItem"
interface Props {
  todos: ReducerInitValue[];
  onDeleteTodo: (todo: ReducerInitValue) => void;
  onToggleTodo: (todo: ReducerInitValue) => void,
}
export const TodoList = ({ todos, onDeleteTodo,onToggleTodo }: Props) => {
  return (
    <ul className="list-group" >
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))
      }
    </ul>
  )
}

import { useEffect, useReducer } from "react";
import { ActionReducer, ReducerInitValue } from "./Reducer.interface";
import { todoReducer } from "./TodoReducer";

const InitialState: ReducerInitValue[] = [
  {
    id: new Date().getTime(),
    todo: 'Recolectar la piedra del Alma',
    done: false
  }
]
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const UseTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, InitialState, init);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addNewTodo = (todo: ReducerInitValue) => {
    const addTodoAction: ActionReducer = {
      type: '[TODO] Add TODO',
      payload: todo
    }
    dispatch(addTodoAction);
  }
  const handleDeleteTodo = (todo: ReducerInitValue) => {
    const removeTodoAction: ActionReducer = {
      type: '[TODO] Delete TODO',
      payload: todo
    }
    dispatch(removeTodoAction);
  }
  const handleToggleTodo = (todo: ReducerInitValue) => {
    const toggleTodo: ActionReducer = {
      type: '[TODO] Toggle TODO',
      payload: todo
    }
    dispatch(toggleTodo);
  }

  return {
    addNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    pendingTodos:todos.filter(todo => todo.done === false).length,
    todos,
    todosCount:todos.length
  }
}

import { FormEvent, useState } from "react"
import { ReducerInitValue } from "./Reducer.interface"
import { useForm } from "../hooks"
interface Props {
  addTodo: (todo: ReducerInitValue) => void
}
export const AddTodo = ({ addTodo }: Props) => {
  const { todo, onInputChange, onResetForm } = useForm({
    todo: ''
  })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length <= 1) return;
    const newTodo: ReducerInitValue = {
      todo,
      id: new Date().getTime(),
      done: false
    }
    addTodo(newTodo)
    onResetForm()
  }
  return (
    <form onSubmit={onSubmit} >
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        value={todo}
        name="todo"
        onChange={(event) => onInputChange(event.target)}
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >Agregar</button>
    </form>
  )
}

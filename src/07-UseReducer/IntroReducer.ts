import { ActionReducer, ReducerInitValue } from "./Reducer.interface";

const InitialState: ReducerInitValue[] = [
  {
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
  }
]

const todoReducer = (state = InitialState, action: ActionReducer) => {
  if (action.type === '[Todo] add todo') {
    return [...state, action.payload]
  }

  return state;
}
const newTodo: ReducerInitValue = {
  id: 2,
  todo: 'Recolectar la piedra del Poder',
  done: false
}
const addTodoAction: ActionReducer = {
  type: '[Todo] add todo',
  payload: newTodo
}
const todos = todoReducer(InitialState, addTodoAction);
console.log({ todos });

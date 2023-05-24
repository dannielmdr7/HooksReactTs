import { ActionReducer, ReducerInitValue } from "./Reducer.interface";

export const todoReducer = (initialState: ReducerInitValue[], action: ActionReducer) => {
  switch (action.type) {
    case '[TODO] Add TODO':
      return [...initialState, action.payload]
    case '[TODO] Delete TODO':
      return initialState.filter(todo => todo.id !== action.payload.id);
    case '[TODO] Toggle TODO':
      return initialState.map(todo => {
        if (todo.id === action.payload.id) {
          const status = todo.done;
          return {
            ...todo, done: !status
          }
        }
        return todo
      });

    default:
      return initialState;
  }

}
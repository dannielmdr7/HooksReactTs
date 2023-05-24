export interface ReducerInitValue {
  id: number;
  todo: string;
  done: boolean
}
export interface ActionReducer{
  type:string;
  payload:ReducerInitValue
}
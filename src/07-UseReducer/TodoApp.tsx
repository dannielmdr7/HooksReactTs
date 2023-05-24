import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { UseTodos } from "./UseTodos";


export const TodoApp = () => {
  const { todos, addNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodos } = UseTodos()
  return (
    <>
      <h1>TodoApp: {todosCount} , <small>pendientes: {pendingTodos} </small> </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <AddTodo addTodo={addNewTodo} />
        </div>
      </div>

    </>
  )
}

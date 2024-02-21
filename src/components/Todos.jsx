import React from "react";
import { useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div className="text-center">
      <>
        <h1>Todos</h1>
        {todos.map((todo) => {
          <ul className="list-none">
            {todos.map((todo) => {
              <li
                className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                key={todo.id}
              >
                <div className="text-red">{todo.text}</div>
                <button
                  // onClick={()=> dispatch(deleteTodo(todo.id))}
                  className="bg-zinc-600 text-white font-bold py-2 px-4 rounded"
                >
                  delete
                </button>
              </li>
            })}
          </ul>;
        })}
      </>
    </div>
  );
}

export default Todos;

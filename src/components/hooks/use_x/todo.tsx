import { useTodo, ToDoWrapper } from "./use_todo";

const url = "https://jsonplaceholder.typicode.com/todos/1";

export const Todo = () => {
  const todoResponse = useTodo<ToDoWrapper>(url);

  return (
    <>
      <h2>Custom Hook</h2>

      {todoResponse.isFetching ? (
        <p>Fetching...</p>
      ) : (
        <p>{todoResponse.data?.title}</p>
      )}
    </>
  );
};

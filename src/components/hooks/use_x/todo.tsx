import { useTodo, ToDoWrapper } from "./use_todo";

export const Todo = () => {
  const todoResponse: ToDoWrapper = useTodo();

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

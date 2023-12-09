import { useState, useEffect } from "react";
import { isError } from "../../../helpers/is_error";

export interface ToDoWrapper {
  isFetching: boolean;
  data: TodoResponse | undefined;
}
interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

export const useTodo = (): ToDoWrapper => {
  const [data, setData] = useState<TodoResponse>();

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        setIsFetching(false);
        if (response.status === 200) {
          const json = await response.json();
          setData(json);
        }
      } catch (e: unknown) {
        setIsFetching(false);
        console.log(isError(e) ? e.message : "Unknown error!");
      }
    };
    fetchData();
  }, [url]);

  return { isFetching, data };
};

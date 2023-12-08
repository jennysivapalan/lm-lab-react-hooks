import { useState, useEffect } from "react";

const endpoint = "https://jsonplaceholder.typicode.com/todos/1";

export const APICall = () => {
  const [json, setJson] = useState<string>("");

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setJson(JSON.stringify(data)))
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      <p>{json}</p>
    </>
  );
};

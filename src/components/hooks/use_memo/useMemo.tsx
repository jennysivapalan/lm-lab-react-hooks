import { useMemo, useState } from "react";

export const MemoExample = () => {
  console.log("Rendering component...");

  const [numberObj, setNumberObj] = useState({ input: 0 });

  const doubleNumber = useMemo(
    () => slowFunction(numberObj.input),
    [numberObj.input]
  );

  function doubleInputNumber() {
    const elem = document.getElementById("inputNum") as HTMLInputElement | null;
    if (elem) {
      setNumberObj({ input: Number(elem.value) });
    }
  }

  return (
    <>
      <h2>useMemo</h2>
      <input type="text" id="inputNum"></input>

      <button onClick={() => doubleInputNumber()}>Double input number</button>

      <p className="use-memo__text">{doubleNumber}</p>
    </>
  );
};

function slowFunction(num: number) {
  console.log("calling slow function... 🐌");
  for (let i = 0; i <= 1000000000; i++) {
    // ⏰
  }
  const result = num * 2;
  console.log(`result: ${result}`);
  return result;
}

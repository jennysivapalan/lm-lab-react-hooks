import { useState } from "react";

export function CountCats() {
  const [catCount, setCatCount] = useState<number>(0);
  const catEmoji = "🐈";
  const cats = Array(catCount).fill(catEmoji);

  return (
    <>
      <h2>useState</h2>

      <p>{cats.join("")}</p>

      <button onClick={() => setCatCount(catCount + 1)}>
        There are {catCount} cats 🥳
      </button>
    </>
  );
}

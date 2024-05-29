"use client";

import { useFormState } from "react-dom";
import { submitCombination } from "./actions";

export default function Home() {
  const [state, action] = useFormState(submitCombination, {
    attempts: 0,
    time_taken: 0,
  });

  return (
    <main className="">
      <h1>Forml OA</h1>
      <div>
        <form action={action}>
          <input name="combination" placeholder="Combination" />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        <div>{state.attempts}</div>
        <div>{state.time_taken}</div>
      </div>
    </main>
  );
}

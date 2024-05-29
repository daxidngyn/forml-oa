"use client";

import { useFormState } from "react-dom";
import { submitCombination } from "./actions";

export default function Home() {
  const [state, action] = useFormState(submitCombination, {
    attempts: 0,
    time_taken: 0,
  });

  return (
    <main className="flex flex-col items-center justify-center p-24">
      <div className="max-w-2xl mx-auto bg-slate-50 py-16 px-12 rounded-lg w-full">
        <h1 className="text-2xl font-medium">Forml OA (007) - David Nguyen</h1>

        <div className="mt-12 w-full rounded-sm">
          <form action={action}>
            <label htmlFor="combination" className="text-sm">
              Combination
            </label>
            <div className="flex flex-row justify-between mt-0.5 gap-x-4">
              <input
                name="combination"
                type="number"
                placeholder="Combination"
                className="bg-white py-2 px-3 rounded-md flex-1 text-sm"
              />

              <button
                type="submit"
                className="bg-slate-900 text-slate-50 px-4 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* <div className="mt-12 space-y-2 bg-white px-8 py-10 rounded-md">
          <div className="relative flex items-center justify-between">
            <div className="bg-white relative z-20 pr-0.5">Attempts</div>
            <div className="bg-white relative z-20 pl-0.5">
              {state.attempts}
            </div>
            <div className="absolute w-full border-dotted border-b-2 border-black -mb-2.5 z-10" />
          </div>

          <div className="relative flex items-center justify-between">
            <div className="bg-white relative z-20 pr-0.5">Time taken</div>
            <div className="bg-white relative z-20 pl-0.5">
              {state.time_taken}s
            </div>
            <div className="absolute w-full border-dotted border-b-2 border-black -mb-2.5 z-10" />
          </div>
        </div> */}

        <div className="mt-12 space-y-2">
          <div className="relative flex items-center justify-between">
            <div className="bg-slate-50 relative z-20 pr-0.5">Attempts</div>
            <div className="bg-slate-50 relative z-20 pl-0.5">
              {state.attempts}
            </div>
            <div className="absolute w-full border-dotted border-b-2 border-black -mb-2.5 z-10" />
          </div>

          <div className="relative flex items-center justify-between">
            <div className="bg-slate-50 relative z-20 pr-0.5">Time taken</div>
            <div className="bg-slate-50 relative z-20 pl-0.5">
              {state.time_taken}s
            </div>
            <div className="absolute w-full border-dotted border-b-2 border-black -mb-2.5 z-10" />
          </div>
        </div>
      </div>
    </main>
  );
}

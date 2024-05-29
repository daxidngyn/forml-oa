"use client";

import { useFormState } from "react-dom";
import { submitCombination } from "./actions";
import { OTPInput } from "input-otp";
import Slot from "./components/Slot";

export default function Home() {
  const [state, action] = useFormState(submitCombination, {
    attempts: 0,
    time_taken: 0,
  });

  return (
    <main className="flex flex-col items-center justify-center sm:p-24">
      <div className="max-w-2xl mx-auto bg-slate-50 py-16 px-12 rounded-lg w-full">
        <h1 className="text-xl sm:text-2xl font-medium">
          Forml OA (007) - David Nguyen
        </h1>

        <div className="mt-12 w-full rounded-sm">
          <form action={action} className="hidden sm:block">
            <label htmlFor="combination" className="text-sm">
              Combination
            </label>
            <div className="flex flex-row justify-between mt-0.5 gap-x-4">
              <OTPInput
                name="combination"
                maxLength={10}
                render={({ slots }) => (
                  <div className="flex">
                    {slots.map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                )}
              />

              <button
                type="submit"
                className="bg-slate-900 text-slate-50 px-4 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>

          <form action={action} className="sm:hidden">
            <label htmlFor="combination" className="text-sm">
              Combination
            </label>
            <div className="flex flex-col justify-between mt-0.5 gap-x-4">
              <input
                placeholder="Combination"
                name="combination"
                type="number"
                className="px-3 py-2 rounded-md w-full"
              />

              <button
                type="submit"
                className="bg-slate-900 text-slate-50 px-4 py-2 mt-4 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

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

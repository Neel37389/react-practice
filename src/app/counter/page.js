"use client";

import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex max-h-screen items-center justify-center p-8">
      <div className="flex gap-8">
        <span
          className={
            counter < 0
              ? "text-red-500"
              : counter > 0
                ? "text-green-500"
                : "text-white"
          }
        >
          {counter}
        </span>
        <button
          onClick={() => setCounter(counter + 1)}
          className="border rounded-4xl p-0.5"
        >
          Increment
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className="border rounded-4xl p-0.5"
        >
          Decrease
        </button>
        <button
          onClick={() => setCounter(0)}
          className="border rounded-4xl p-0.5"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

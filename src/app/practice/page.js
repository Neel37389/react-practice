"use client";

import { useState } from "react";
import { TempDisplay } from "@/components/TempDisplay";

export default function ReactPracticePage() {
  const [temp, setTemp] = useState(0);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8">
      <TempDisplay temp={temp} />
      <button onClick={() => setTemp(temp + 1)}>Increase</button>
      <button onClick={() => setTemp(temp - 1)}>Decrease</button>
    </div>
  );
}

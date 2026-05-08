"use client";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex max-h-screen items-center justify-center p-8">
      <button
        className="border rounded-4xl p-0.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Hide" : "Show"}
      </button>
      {isOpen && <p>Neel Patel</p>}
    </div>
  );
}

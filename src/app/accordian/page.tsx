"use client";

import { useState } from "react";

interface AccordianItem {
  id: number;
  question: string;
  answer: string;
}

const items: AccordianItem[] = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building UIs.",
  },
  {
    id: 2,
    question: "What is TypeScript?",
    answer: "A strongly typed version of JavaScript.",
  },
  {
    id: 3,
    question: "What is Next.js?",
    answer: "A React framework with server side rendering.",
  },
];

export default function AccordianPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center">
      {items.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => setActive(active === item.id ? null : item.id)}
          >
            {item.question}
          </button>
          {active === item.id && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}

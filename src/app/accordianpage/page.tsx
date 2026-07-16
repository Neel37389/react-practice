"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const ITEMS_PER_PAGE = 3;

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces.",
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
  {
    id: 4,
    question: "What is Tailwind CSS?",
    answer: "A utility first CSS framework.",
  },
  {
    id: 5,
    question: "What is Supabase?",
    answer: "An open source Firebase alternative with auth and database.",
  },
  {
    id: 6,
    question: "What is useState?",
    answer: "A React hook for storing and updating state.",
  },
  {
    id: 7,
    question: "What is useEffect?",
    answer: "A React hook for running side effects after render.",
  },
  {
    id: 8,
    question: "What is prop drilling?",
    answer: "Passing props through multiple components that don't need them.",
  },
  {
    id: 9,
    question: "What is SSR?",
    answer:
      "Server Side Rendering — pages built on the server on every request.",
  },
  {
    id: 10,
    question: "What is SSG?",
    answer: "Static Site Generation — pages built once at build time.",
  },
];

export default function AccordianPage() {
  const [active, setActive] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(faqItems.length / ITEMS_PER_PAGE);
  const visibleItems = faqItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {visibleItems.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => setActive(active === item.id ? null : item.id)}
          >
            {item.question}
          </button>
          {active === item.id && <p>{item.answer}</p>}
        </div>
      ))}
      <div className="flex flex-col p-8">
        <p>
          {currentPage} of {totalPages}
        </p>
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
            setActive(null);
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
            setActive(null);
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

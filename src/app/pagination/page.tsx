"use client";

import { useState } from "react";

const ITEMS_PER_PAGE = 5;

const totalItems = Array.from({ length: 20 }, (_, i) => `Item${i + 1}`);

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(totalItems.length / ITEMS_PER_PAGE);
  const visibleItems = totalItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="p-8">
      {visibleItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <p>
        {currentPage} of {totalPages}
      </p>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";

interface ModalProps {
  onClose: () => void;
  title: string;
}

interface Tab {
  id: number;
  label: string;
  content: string;
}

const tabs: Tab[] = [
  { id: 1, label: "Home", content: "Welcome to Home" },
  { id: 2, label: "About", content: "About" },
  { id: 3, label: "Contact", content: "Contact Us" },
];

export const Modal = ({ onClose, title }: ModalProps) => {
  const [isActive, setIsActive] = useState<number>(1);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8">
      <h2>{title}</h2>
      {tabs.map((tab) => (
        <div key={tab.id}>
          <button
            className={
              isActive === tab.id
                ? "font-bold text-purple-500"
                : "text-gray-500"
            }
            onClick={() => setIsActive(tab.id)}
          >
            {tab.label}
          </button>
        </div>
      ))}
      <p>{tabs.find((tab) => tab.id === isActive)?.content}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

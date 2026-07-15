"use client";

import { useState } from "react";
import { Modal } from "../../components/Modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white text-black rounded-xl p-6">
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              title="Hello"
            />
          </div>
        </div>
      )}
    </div>
  );
}

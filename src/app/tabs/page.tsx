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

      {isOpen && <Modal onClose={() => setIsOpen(false)} title="Hello" />}
    </div>
  );
}

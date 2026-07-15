"use client";

import { useState } from "react";

export default function ReducePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [done, setDone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setNameError("Enter Name");
    }
    if (!email.includes("@")) {
      setEmailError("Enter a valid email");
    }
    if (password.length < 8) {
      setPasswordError("Password must be 8 characters");
    }
    if (name && email.includes("@") && password.length >= 8) {
      setDone("Account Created");
      setEmail("");
      setName("");
      setPassword("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-8 flex-col gap-4">
      <form>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <p className="text-red-500 text-sm">{passwordError}</p>
        )}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        {done && <p className="text-green-500">{done}</p>}
      </form>
    </div>
  );
}

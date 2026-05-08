"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState("");

  async function fetchJoke() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex max-h-screen items-center justify-center p-8">
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="space-y-4 text-center">
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
          <button onClick={fetchJoke}>Get New Joke</button>
        </div>
      )}
    </div>
  );
}

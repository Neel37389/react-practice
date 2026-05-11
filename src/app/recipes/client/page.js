"use client";

import { useState, useEffect, useRef } from "react";
import { RecipeCard } from "@/components/RecipeCard";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [favourites, setfavourites] = useState([]);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  const addToFavourites = (recipe) => {
    setfavourites([...favourites, recipe]);
  };

  async function fetchRecipes() {
    try {
      setLoading(true);
      const resposne = await fetch("http://localhost:3000/api/recipes");
      const data = await resposne.json();
      setRecipes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col max-h-screen items-center justify-center p-8">
      <p>Favourites {favourites.length}</p>
      <input
        ref={inputRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Filter Products..."
      ></input>
      {loading ? (
        <p>Loading...</p>
      ) : (
        recipes
          .filter((recipe) =>
            recipe.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              ingredients={recipe.ingredients}
              time={recipe.time}
              addToFavourites={() => addToFavourites(recipe)}
            />
          ))
      )}
    </div>
  );
}

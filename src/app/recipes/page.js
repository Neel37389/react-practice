import Link from "next/link";

export default async function RecipePage() {
  const response = await fetch("http://localhost:3000/api/recipes");
  const recipes = await response.json();

  return (
    <div>
      {recipes.map((recipe) => (
        <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
          <div>
            <p>{recipe.title}</p>
            <p>{recipe.time}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

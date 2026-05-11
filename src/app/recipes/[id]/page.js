export default async function RecipePage({ params }) {
  const resposne = await fetch("http://localhost:3000/api/recipes");
  const recipes = await resposne.json();
  const { id } = await params;
  const recipe = recipes.find((p) => String(p.id) === id);
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.ingredients}</p>
      <p>{recipe.time}</p>
    </div>
  );
}

export async function GET() {
  const recipes = [
    {
      id: 1,
      title: "Pasta",
      ingredients: ["pasta", "tomato", "garlic"],
      time: 30,
    },
    {
      id: 2,
      title: "Burger",
      ingredients: ["bun", "beef", "cheese"],
      time: 20,
    },
    {
      id: 3,
      title: "Salad",
      ingredients: ["lettuce", "tomato", "cucumber"],
      time: 10,
    },
  ];

  return Response.json(recipes);
}

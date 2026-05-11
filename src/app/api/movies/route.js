export async function GET() {
  const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 9 },
    { id: 2, title: "The Dark Knight", genre: "Action", rating: 10 },
    { id: 3, title: "Interstellar", genre: "Sci-Fi", rating: 9 },
    { id: 4, title: "Pulp Fiction", genre: "Crime", rating: 9 },
  ];

  return Response.json(movies);
}

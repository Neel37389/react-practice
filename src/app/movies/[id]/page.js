export default async function MoviePage({ params }) {
  const resposne = await fetch("http://localhost:3000/api/movies");
  const movies = await resposne.json();
  const { id } = await params;
  const movie = movies.find((p) => String(p.id) === id);
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.genre}</p>
      <p>{movie.rating}</p>
    </div>
  );
}

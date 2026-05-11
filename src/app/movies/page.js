import Link from "next/link";

export default async function MoviesPage() {
  const response = await fetch("http://localhost:3000/api/movies");
  const movies = await response.json();

  return (
    <div>
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <div>
            <p>{movie.title}</p>
            <p>{movie.rating}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

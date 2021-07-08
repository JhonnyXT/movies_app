import MovieCard from "./MovieCard.jsx";
import styles from "./MoviesGrid.Module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";

export function MoviesGrid() {
  //Estados
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //hooks
  const query = useQuery();
  const search = query.get("search");

  //el useEffect sirve para cargar en este caso la API como secundario (primero carga el DOM y luego lo que contiene la API)
  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

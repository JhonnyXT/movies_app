import movies from "./movies.json";
import MovieCard from "./MovieCard.jsx";
import styles from "./MoviesGrid.Module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export function MoviesGrid() {
  //Estados
  const [movies, setMovies] = useState([]);

  //el useEffect sirve para cargar en este caso la API como secundario (primero carga el DOM y luego lo que contiene la API)
  useEffect(() => {
    get("/discover/movie").then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

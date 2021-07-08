import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";

export function MovieDetails() {
  //Identificador, parametro que obtenemos arriba en la URL de cada pelicula
  const { movieId } = useParams();
  //Estado
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    })
  }, [movieId])

  if (isLoading) {
    return <Spinner/>
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}{" "}
          {/*el metodo .join me ayuda a introducir algun elemento al arreglo*/}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}

import movies from './movies.json';
import MovieCard from './MovieCard.jsx';
import styles from './MoviesGrid.Module.css';
import { useEffect } from 'react';

export function MoviesGrid(){

    //el useEffect sirve para cargar en este caso la API como secundario (primero carga el DOM y luego lo que contiene la API)
    useEffect(() => [
        fetch('/discover/movie', {
            headers: {
                Authorization: ""
            }
        })
    ])

    return(
        <ul className={styles.moviesGrid}>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}
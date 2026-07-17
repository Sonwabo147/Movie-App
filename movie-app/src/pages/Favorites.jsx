import { useEffect, useState } from 'react';
import { getFavorites } from '../services/favoriteService';


function Favorites() {

    const [movies, setMovies] = useState([]);


    useEffect(() => {

        async function load() {

            const data = await getFavorites();

            setMovies(data);

        }
        load();

    }, []);


    return (

        <div className="container">
            <h1>My Favorites</h1>
            <div className="movie-grid">
                {movies.map(movie => (
                    <div
                        className="movie-card"
                        key={movie.movie_id}
                    >

                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />

                        <h3>{movie.title}</h3>

                        <p>⭐ {movie.vote_average}</p>

                    </div>

                ))}

            </div>

        </div>

    );

}


export default Favorites;
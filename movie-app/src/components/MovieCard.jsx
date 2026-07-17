import { toggleFavorite } from '../services/favoriteService';


function MovieCard({ movie, onClick }) {

    async function handleFavorite() {
        const user = JSON.parse(
            localStorage.getItem('user')
        );
        if (!user) return;
        const result = await toggleFavorite(movie);
    }


    return (

        <div className="movie-card" onClick={onClick}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />


            <h3>{movie.title}</h3>

            <p>{movie.release_date}</p>


            <button onClick={handleFavorite}>
                ❤️ Add to Favorites
            </button>

        </div>

    );

}


export default MovieCard;
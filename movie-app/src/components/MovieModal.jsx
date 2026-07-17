
function MovieModal({ movie, onClose }) {
    if (!movie) return null;
    return (
        <div
            className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e)=>e.stopPropagation()}>
                <button className="close" onClick={onClose}>✕</button>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div>

                    <h2>{movie.title}</h2>
                    <p>⭐ {movie.vote_average}</p>
                    <p>{movie.release_date}</p>
                    <p>{movie.runtime} minutes</p>
                    <p>
                        {
                            movie.genres?.map(
                                genre=>genre.name
                            ).join(", ")
                        }
                    </p>
                    <p> {movie.overview}</p>
                </div>
            </div>
        </div>
    );

}

export default MovieModal;
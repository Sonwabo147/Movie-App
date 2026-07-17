import { useEffect, useState } from "react";
import { getPopularMovies , searchMovies, getMovieDetails} from "../services/movieService";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";


function Home() {

    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedMovie,setSelectedMovie]=useState(null);
    const moviesPerPage = 9;

    useEffect(() => {

        async function loadMovies() {
            try {

                const data = await getPopularMovies();

                setMovies(data.results.slice(0, 45));

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        loadMovies();

    }, []);

    useEffect(() => {
        const timer = setTimeout(async () => {

            if (search.trim().length < 2) {
                setSuggestions([]);
                return;
            }

            try {

                const data = await searchMovies(search);

                setSuggestions(data.results.slice(0, 5));
                setShowSuggestions(true);

            } catch (error) {
                console.error(error);
            }

        }, 300);
        return () => clearTimeout(timer);
    }, [search]);

    async function handleSearch() {
        if (!search.trim()) {

            const data = await getPopularMovies();

            setMovies(data.results.slice(0, 45));

            return;
        }

        try {

            const data = await searchMovies(search);

            setMovies(data.results);

            setCurrentPage(1);

        } catch (error) {

            console.error(error);

        }
    }

    function selectMovie(movie) {

        setSearch(movie.title);

        setMovies([movie]);

        setSuggestions([]);

        setShowSuggestions(false);

    }

    async function openMovie(movie) {
        const details=await getMovieDetails(movie.id);
        setSelectedMovie(details);
    }

    if (loading) return <h2>Loading movies...</h2>;

    const startIndex = (currentPage - 1) * moviesPerPage;
    const displayedMovies = movies.slice(
        startIndex,
        startIndex + moviesPerPage
    );


    const totalPages = Math.ceil(
        movies.length / moviesPerPage
    );


    return (
        <div className="container">

            <h1>Popular Movies</h1>
            <div className="search-wrapper">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={handleSearch}>
                        Search
                    </button>

                </div>
                {showSuggestions && suggestions.length > 0 && (
                    <div className="autocomplete">

                        {suggestions.map(movie => (

                            <div
                                key={movie.id}
                                className="autocomplete-item"
                                onClick={() => selectMovie(movie)}
                            >
                                {movie.title}
                            </div>

                        ))}

                    </div>
                )}

            </div>


            <div className="movie-grid">

                {displayedMovies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onClick={()=>openMovie(movie)}
                    />
                ))}

            </div>


            <div className="pagination">

                <button
                    disabled={currentPage === 1}
                    onClick={() =>
                        setCurrentPage(currentPage - 1)
                    }
                >
                    Previous
                </button>


                <span>
                    Page {currentPage} of {totalPages}
                </span>


                <button
                    disabled={currentPage === totalPages}
                    onClick={() =>
                        setCurrentPage(currentPage + 1)
                    }
                >
                    Next
                </button>

            </div>

            <MovieModal
                movie={selectedMovie}
                onClose={()=>setSelectedMovie(null)}
            />

        </div>
    );
}

export default Home;
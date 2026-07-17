const API_URL = `${import.meta.env.VITE_API_URL}/api`;


export async function getPopularMovies() {

    const response = await fetch(
        `${API_URL}/movies/popular?page=1`
    );


    if (!response.ok) {
        throw new Error(
            "Failed fetching movies"
        );
    }


    return response.json();
}

export async function searchMovies(query) {

    const response = await fetch(
        `http://127.0.0.1:5000/api/movies/search?query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        throw new Error("Search failed");
    }

    return response.json();
}

export async function getMovieDetails(id){

    const response = await fetch(`${API_URL}/movies/${id}`);

    return response.json();

}

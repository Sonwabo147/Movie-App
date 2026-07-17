const API = 'http://127.0.0.1:5000/favorites';


export async function toggleFavorite(movie) {

    const user = JSON.parse(
        localStorage.getItem('user')
    );


    const response = await fetch(
        `${API}/toggle`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                user_id: user.id,
                movie_id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                vote_average: movie.vote_average
            })
        }
    );


    return response.json();

}


export async function getFavorites() {

    const user = JSON.parse(
        localStorage.getItem('user')
    );


    const response = await fetch(
        `${API}/favorites/${user.id}`
    );


    return response.json();

}


export async function removeFavorite(movieId) {

    const user = JSON.parse(
        localStorage.getItem('user')
    );


    const response = await fetch(
        `${API}/remove/${user.id}/${movieId}`,
        {
            method: 'DELETE'
        }
    );


    return response.json();

}
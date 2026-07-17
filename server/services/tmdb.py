import os
import requests

BASE_URL = "https://api.themoviedb.org/3"

TOKEN = os.getenv("TMDB_ACCESS_TOKEN")

def tmdb_get(endpoint, params=None):

    headers = {
        "Authorization": f"Bearer {TOKEN}",
        "accept": "application/json"
    }

    response = requests.get(
        f"{BASE_URL}/{endpoint}",
        headers=headers,
        params=params
    )

    response.raise_for_status()

    return response.json()

def get_popular_movies():
    headers = {
        "Authorization": f"Bearer {TOKEN}",
        "accept": "application/json"
    }

    movies = []

    for page in range(1, 4):

        response = requests.get(
            f"{BASE_URL}/movie/popular",
            headers=headers,
            params={
                "page": page
            }
        )

        data = response.json()

        movies.extend(data["results"])


    return {
        "results": movies[:45]
    }

def get_top_rated_movies(page=1):
    return tmdb_get(
        "movie/top_rated",
        {
            "page": page
        }
    )

def get_upcoming_movies(page=1):
    return tmdb_get(
        "movie/upcoming",
        {
            "page": page
        }
    )

def get_now_playing(page=1):
    return tmdb_get(
        "movie/now_playing",
        {
            "page": page
        }
    )

def search_movies(query, page=1):

    return tmdb_get(
        "search/movie",
        {
            "query": query,
            "page": page
        }
    )

def get_movie(movie_id):
    return tmdb_get(f"movie/{movie_id}")
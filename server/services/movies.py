import os
import requests

TMDB_BASE_URL = "https://api.themoviedb.org/3"
TMDB_ACCESS_TOKEN = os.getenv("TMDB_ACCESS_TOKEN")

def search_movies(query):
    headers = {
        "Authorization": f"Bearer {TMDB_ACCESS_TOKEN}",
        "accept": "application/json"
    }
    response = requests.get(
        f"{TMDB_BASE_URL}/search/movie",
        headers=headers,
        params={
            "query": query,
            "include_adult": False,
            "language": "en-US",
            "page": 1
        }
    )
    response.raise_for_status()
    print(response.json)

    return response.json()

def get_movie_details(movie_id):
    headers = {
        "Authorization": f"Bearer {TMDB_ACCESS_TOKEN}",
        "accept": "application/json"
    }

    response = requests.get(
        f"{TMDB_BASE_URL}/movie/{movie_id}",
        headers=headers
    )
    response.raise_for_status()
    return response.json()
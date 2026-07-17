from flask import Blueprint, request, jsonify
from services.tmdb import *
from services.movies import get_movie_details
import json

api = Blueprint("api", __name__, url_prefix="/api")


@api.route("/movies/<int:movie_id>")
def movie_details(movie_id):
    movie = get_movie_details(movie_id)
    return jsonify(movie)

# Popular
@api.route("/movies/popular")
def popular():
    movies = get_popular_movies()
    return jsonify(movies)

# Top Rated
@api.route("/movies/top-rated")
def top_rated():
    page = request.args.get("page", 1)
    return jsonify(get_top_rated_movies(page))

# Search
@api.route("/movies/search")
def search():

    query = request.args.get("query")
    page = request.args.get("page", 1)

    return jsonify(search_movies(query, page))
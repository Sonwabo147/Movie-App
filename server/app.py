from flask import Flask, request, jsonify
from flask_cors import CORS
from routes.api import api
from routes.auth import auth
from routes.favorites import favorites
from services.movies import search_movies

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth)
app.register_blueprint(api)
app.register_blueprint(favorites)

@app.route("/")
def home():
    return {
        "status": "success",
        "message": "Flask Server Running"
    }

@app.route("/movies/search")
def search():

    query = request.args.get("query", "")

    if not query.strip():
        return jsonify({"results": []})

    movies = search_movies(query)

    return jsonify(movies)

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )
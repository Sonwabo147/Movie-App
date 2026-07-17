from flask import Blueprint, request, jsonify
from database import get_db

favorites = Blueprint('favorites', __name__, url_prefix="/favorites")


# Toggle favorite
@favorites.route('/toggle', methods=['POST'])
def add_favorite():

    data = request.json
    user_id = data['user_id']
    movie_id = data['movie_id']
    title = data['title']
    poster_path = data.get('poster_path')
    vote_average = data.get('vote_average')

    try:
        db = get_db()
        cursor = db.cursor()
        fav_sql =  '''SELECT * FROM favorites WHERE user_id = %s && movie_id = %s'''
        cursor.execute(fav_sql, (user_id, movie_id))
        favorite = cursor.fetchone()

        if not favorite:
            sql =  '''
                INSERT INTO favorites(user_id, movie_id, title, poster_path, vote_average)
                VALUES (%s, %s, %s, %s, %s)
                '''
            cursor.execute(sql ,(user_id, movie_id, title, poster_path, vote_average))
            db.commit()
            return jsonify({'success': True, 'message': 'Movie added to favorites'})
        else:
            sql = ''' DELETE FROM favorites  WHERE user_id= %s AND movie_id= %s '''
            cursor.execute(sql, (user_id, movie_id))
            db.commit()
            return jsonify({'success': True, 'message': 'Movie removed from favorites'})
    
    except Exception as e:
        return jsonify({'success': False,'message': e.error}), 400
    finally:
        cursor.close()
        db.close()


# Get user's favorites
@favorites.route('/favorites/<int:user_id>', methods=['GET'])
def get_favorites(user_id):

    db = get_db()

    cursor = db.cursor(dictionary=True)

    sql = ''' SELECT * FROM favorites WHERE user_id=%s ORDER BY created_at DESC'''

    cursor.execute(sql,(user_id,))
    movies = cursor.fetchall()
    cursor.close()
    db.close()

    return jsonify(movies)


# Remove favorite
# @favorites.route('/remove/<int:user_id>/<int:movie_id>', methods=['DELETE'])
# def remove_favorite(user_id, movie_id):

    # db = get_db()
    # cursor = db.cursor()
    # sql = '''
    #     DELETE FROM favorites
    #     WHERE user_id=%s AND movie_id=%s
    #     '''
    # cursor.execute(sql, (user_id, movie_id))
    # db.commit()
    # cursor.close()
    # db.close()
    # return jsonify({'success': True,'message': 'Favorite removed'})
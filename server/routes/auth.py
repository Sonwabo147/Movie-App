from flask import Blueprint, request, jsonify
from database import get_db
from flask_bcrypt import Bcrypt


auth = Blueprint("auth", __name__, url_prefix="/auth")

bcrypt = Bcrypt()


@auth.route("/register", methods=["POST"])
def register():

    data = request.json
    username = data["username"]
    email = data["email"]
    password = data["password"]

    password_hash = bcrypt.generate_password_hash(
        password
    ).decode("utf-8")

    db = get_db()
    cursor = db.cursor()

    sql = """INSERT INTO users( username, email, password_hash)VALUES (%s,%s,%s)"""
    cursor.execute(sql, (username, email, password_hash))
    db.commit()
    cursor.close()
    db.close()

    return jsonify({
        "success": True,
        "message": "Registration successful"
    })

@auth.route("/login", methods=["POST"])
def login():

    data = request.json
    email = data["email"]
    password = data["password"]

    db = get_db()
    cursor = db.cursor(dictionary=True)
    sql = """SELECT * FROM users WHERE email= %s """
    cursor.execute(sql, (email,))
    user = cursor.fetchone()


    if not user:
        return jsonify({"message":"Invalid login"}),401

    valid = bcrypt.check_password_hash( user["password_hash"], password)


    if not valid:
        return jsonify({ "message":"Invalid login"}),401

    return jsonify({
        "message":"Login successful",
        "user":{
            "id":user["id"],
            "username":user["username"],
            "email":user["email"]
        }
    })
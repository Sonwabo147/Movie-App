
# Movie Explorer Application

## Project Overview

Movie Explorer is a full-stack web application that allows users to discover, search, and interact with movie information obtained from The Movie Database (TMDB) API.

The application provides users with the ability to:

* View popular movies
* Search for movies using autocomplete functionality
* View detailed information about selected movies
* Register and log into an account
* Add movies to a personal favourites list
* Navigate through movie collections using pagination
* Contact the application owner through a dedicated contact page

The project was developed as a full-stack assessment to demonstrate frontend development, backend API creation, database integration, authentication, and third-party API consumption.

---

# Technologies Used

## Frontend

### React.js

React was chosen as the frontend framework because it allows the application interface to be developed using reusable components.

The component-based structure makes the application easier to maintain and extend. Features such as movie cards, navigation, search functionality, login forms, and movie detail popups can be developed independently and reused throughout the application.

### JavaScript

JavaScript was selected because it is the primary language used for modern web development and works naturally with React.

It provides the functionality required for:

* Managing application state
* Handling user interactions
* Communicating with backend APIs
* Dynamically updating the user interface

### CSS

CSS was used to create the application styling and ensure the interface is responsive and user-friendly.

---

## Backend

### Python Flask

Flask was selected as the backend framework because it is lightweight, flexible, and suitable for building REST APIs.

The backend is responsible for:

* Handling frontend requests
* Communicating with external APIs
* Managing authentication requests
* Protecting sensitive API credentials
* Processing database operations

Using Flask also allows the backend functionality to be separated from the frontend, creating a cleaner application architecture.

---

## Database

### MySQL

MySQL was selected as the database because it is a reliable relational database system that is widely used in production environments.

The database stores:

* User registration information
* User authentication details
* Favourite movie selections
* Application-related data

A relational database structure was chosen because the data contains clear relationships between users and their favourite movies.

---

## External API

### The Movie Database (TMDB) API

The application uses the TMDB API to retrieve movie information.

The API provides:

* Movie titles
* Posters
* Descriptions
* Ratings
* Release dates
* Movie categories

The API key is stored and accessed from the backend instead of the frontend to prevent exposing sensitive credentials.

---

# Application Architecture

The application follows a client-server architecture.

```
User
 |
 |
React Frontend
 |
 |
Flask REST API
 |
 |
MySQL Database
 |
 |
TMDB API
```

The frontend handles user interaction and presentation, while the backend manages business logic, authentication, database communication, and external API requests.

---

# Project Setup Instructions

## Requirements

Before running the application, install:

* Node.js
* npm
* Python 3.x
* MySQL Server

---

# Backend Setup

Navigate into the backend directory:

```
cd backend
```

Create a Python virtual environment:

```
python -m venv venv
```

Activate the virtual environment.

Windows:

```
venv\Scripts\activate
```

Linux/macOS:

```
source venv/bin/activate
```

Install required dependencies:

```
pip install -r requirements.txt
```

Create a `.env` file inside the backend folder:

```
TMDB_API_KEY=your_api_key_here

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=movie_app
```

Start the Flask server:

```
python app.py
```

The backend will run on:

```
http://localhost:5000
```

---

# Frontend Setup

Navigate into the frontend directory:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start the React development server:

```
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

# Database Setup

Create the database:

```sql
CREATE DATABASE movie_app;
```

Create the required tables:

Example:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255)
);


CREATE TABLE favourites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    movie_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);
```

---

# Development Approach

The project was developed using an incremental approach.

The application was built in the following stages:

## Stage 1: Backend API Development

The Flask backend was created first to handle communication with TMDB.

This ensured that movie data retrieval worked correctly before connecting it to the frontend.

## Stage 2: Frontend Development

React components were created for:

* Navigation
* Movie display cards
* Search functionality
* Movie information modal
* Authentication pages

This allowed each feature to be developed independently.

## Stage 3: Authentication

User registration and login functionality were implemented.

The authentication system allows users to create accounts and manage personal favourites.

## Stage 4: Database Integration

MySQL was introduced to store user information and favourite movie selections.

---

# Design Decisions

## Separation of Frontend and Backend

The frontend and backend were separated to improve maintainability and scalability.

This approach allows either side of the application to be modified without affecting the other.

For example, the React application could later be replaced with another frontend framework while keeping the Flask API unchanged.

---

## API Requests Through Backend

The application communicates with TMDB through Flask rather than directly from React.

This was chosen because:

* API credentials remain secure
* Backend logic can control requests
* Additional APIs can easily be integrated later

---

## Database Restore

Create a MySQL database:

CREATE DATABASE aglet;

Import the database dump:

mysql -u root -p '' < database/users.sql database/favorites.sql

The dump file is located at:

database/

---

## Component-Based Frontend Design

React components were used because they make the application easier to manage.

Examples include:

* MovieCard component
* Search component
* Navbar component
* Login component
* MovieDetails modal

Each component has a specific responsibility, improving code organisation.

---

# Assumptions

The following assumptions were made during development:

* Users have internet access because movie information is retrieved from TMDB.
* The TMDB API remains available.
* Users register with valid information.
* The application is intended for demonstration purposes rather than handling sensitive production user data.

---

# Future Improvements

Possible improvements include:

* Implement JWT authentication
* Add password encryption improvements
* Add user profile pages
* Add movie recommendations
* Add movie reviews
* Deploy frontend and backend using CI/CD pipelines
* Add automated testing
* Improve mobile responsiveness

---

# Author

Sonwabo Owami

Full Stack Developer

---

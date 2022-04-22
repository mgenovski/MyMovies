# My Favorite Movies
Pre-Interview Assignment

### Client - Front-end application
- Create React App
- React Router
- Rating - MUI Rating Component

### Server - Back-end application

- Rest Service
- Express.js
- MongoDB / Mongoose

### Endpoints:
  1. /search
    - GET - /search/:title - Search movies by title
  2. /movie
    - GET - /movie/:movieId - Get movie data by movie id
  3. /favorites
    - GET - /favorites - Get all favorites
    - POST - /favorites - Add movie to favorites. Request body: { movieId, imgUrl }.
    - DELETE - /favorites/:movieId - Delete a movie from favorites
  4. /ratings
    - GET - /ratings - Get all ratings
    - POST - /ratings - Add or change rating. Request body: { movieId, rating }
    - GET - /ratings/:movieId - Get rating by movie id
    - DELETE - /ratings/:movieId - Delete rating
  5. /notes
    - GET - /notes - Get all notes
    - POST - /notes - Create or edit a note. Request body: { movieId, text }
    - GET - /notes/:movieId - Get note by movie id
  

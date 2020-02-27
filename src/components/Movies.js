import React from 'react';
import { movies } from '../data';

const renderMovies = () => {
  return (
    movies.map( movie => {
      let movieGenres = movie.genres.map( genre => {
        return <li>{genre}</li>
      })
      return (
        <div>
          <p><strong>Title:</strong> {movie.title}</p>
          <p><strong>Time:</strong> {movie.time}</p>
          <ul>
            {movieGenres}
          </ul>
        </div>
      )
    })
  )
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;

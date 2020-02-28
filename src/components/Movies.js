import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const eachMovie = movies.map((movie, index)=> {
    return <div key={index} >
      <h3>
        Movie: {movie.title}
      </h3>
      <p>Time: {movie.time} </p>
      <p>Genres: </p>
      <ul>
        {movie.genres.map((genre, index)=> {
          return <li key={index}>{genre}</li>
        })}
      </ul>

    </div>
  })
  return (
    <div>
        <h1>Movies Page</h1>
        {eachMovie}
    </div>
  );
};

export default Movies;

import React from 'react';
import { directors } from '../data';

const renderDirectors = () => {
  return (
    directors.map( director => {
      let directorMovies = director.movies.map( movie => {
        return <li>{movie}</li>
      })
      return (
        <div>
          <p><strong>Name:</strong> {director.name}</p>
          <ul>
            {directorMovies}
          </ul>
        </div>
      )
    })
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors

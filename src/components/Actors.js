import React from 'react';
import { actors } from '../data';

const renderActors = () => {
  return (
    actors.map( actor => {
      let actorMovies = actor.movies.map( movie => {
        return <li>{movie}</li>
      })
      return (
        <div>
          <p><strong>Name:</strong> {actor.name}</p>
          <ul>
            {actorMovies}
          </ul>
        </div>
      )
    })
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;

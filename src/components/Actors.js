import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const eachActor = actors.map((actor,index) => {
    return <div key={index}>
      <h3>Name: {actor.name}</h3>
      <p>Movies:</p>
      <ul>
        {actor.movies.map((movie,index)=> {
          return <li key={index}>{movie}</li>
        })}
      </ul>
    </div>
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {eachActor}
    </div>
  );
};

export default Actors;

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path='/' exact component={Home} />
        <Route path='/movies' exact component={Movies}/>
        <Route path='/actors' exact component={Actors}/>
        <Route path='/directors' exact component={Directors}/>
      </div>
    </Router>

  );
};

export default App

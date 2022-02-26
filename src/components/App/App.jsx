import React from 'react';
import axios from 'axios';
import './App.css';

// COMPONENT IMPORTS
import Home from '../Home/Home.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Content from '../Content/Content.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';

// IMPORT ROUTING
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/feeling' exact>
          <Feeling />
        </Route>

        <Route path='/content' exact>
          <Content />
        </Route>

        <Route path='/support' exact>
          <Support />
        </Route>


        <Route path='/comments' exact>
          <Comments />
        </Route>

        <Route path='/review' exact>
          <Review />
        </Route>

      </div>
    </Router>
  );
}

export default App;

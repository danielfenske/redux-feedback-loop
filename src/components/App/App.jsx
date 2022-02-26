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

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Home/>
      <Feeling/>
      <Content/>
      <Support/>
      <Comments/>
      <Review/>
    </div>
  );
}

export default App;

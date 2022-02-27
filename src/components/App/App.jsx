import React from 'react';
import axios from 'axios';
import './App.css';
import {useEffect} from 'react';

// COMPONENT IMPORTS
import Home from '../Home/Home.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import Admin from '../Admin/Admin.jsx';
import Success from '../Success/Success.jsx';

// IMPORT ROUTING
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// IMPORT REDUX COMPONENTS
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const currentFeedback = useSelector((store) => (store.currentFeedback));

  // API ENDPOINTS
  const getFeedbackHistory = () => {
    axios.get('/api/feedback')
      .then((response) => {
        console.log('response from GET', response.data);

        dispatch({
          type: 'STORE_FEEDBACK_HISTORY',
          payload: response.data
        })
      })
      .catch((error) => {
        console.log('error from GET', error);
      })
  }

  const postCurrentFeedback = () => {

    axios.post('/api/feedback', currentFeedback)
      .then((response) => {
        console.log('response from POST', response.data);

        dispatch({
          type: 'CLEAR_FEEDBACK'
        })

        getFeedbackHistory();

      })
      .catch((error) => {
        console.log('error from POST', error);
      })
  }


  useEffect(() => {
    getFeedbackHistory(); 
  }, [])


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

        <Route path='/understanding' exact>
          <Understanding />
        </Route>

        <Route path='/support' exact>
          <Support />
        </Route>


        <Route path='/comments' exact>
          <Comments />
        </Route>

        <Route path='/review' exact>
          <Review 
            postCurrentFeedback={postCurrentFeedback}
          />
        </Route>

        <Route path='/admin' exact>
          <Admin />
        </Route>

        <Route path='/success' exact>
          <Success />
        </Route>

      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

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
import { HashRouter as Router, Route } from 'react-router-dom';

// IMPORT REDUX COMPONENTS
import { useDispatch, useSelector } from 'react-redux';

// IMPORT MATERIAL UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
  },
});

function App() {

  const dispatch = useDispatch();

  // useSelector to grab current feedback held in redux
  const currentFeedback = useSelector((store) => (store.currentFeedback));

  // API ENDPOINTS
  // retrieves feedback submission history stored in database
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

  // sends latest feedback submission as request to server 
  // to store in database
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

  // updates flagged status in database when bookmark is
  // toggled in admin section of app
  const updateFeedbackSubmission = (feedback) => {
    axios.put(`/api/feedback/${feedback.id}`, feedback).then((response) => {
      getFeedbackHistory();
    })
  }

  useEffect(() => {
    getFeedbackHistory();
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>
          <main>
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
              <Admin
                updateFeedbackSubmission={updateFeedbackSubmission}
              />
            </Route>

            <Route path='/success' exact>
              <Success />
            </Route>
          </main>
        </div>
      </Router>

    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// import redux components
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './reducers/_root.reducer';

// create storeInstance, which pulls in rootReducer and applyMiddleware (logger)
const storeInstance = createStore(
    rootReducer,
    applyMiddleware(
        logger
    )
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App/>
    </Provider>, 
    document.getElementById('root'));
    registerServiceWorker();

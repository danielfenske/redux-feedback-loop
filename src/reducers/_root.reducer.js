import {combineReducers} from 'redux';

// reducers

// this reducer stores feedback history that is sent from database to axios request and dispatched here
const feedbackHistory = (state=[], action) => {

    if (action.type === 'STORE_FEEDBACK_HISTORY') {
        return action.payload;
    }
    return state;
}

const INITIAL_STATE = {feeling: 0, understanding: 0, support: 0, comments: '', flagged: false}

// this reducer stores current feedback properties with its values and gets updated every time
// a section of the form is received
const currentFeedback = (state=INITIAL_STATE, action) => {    

    // evaluate action.type from dispatch and add payload data accordingly
    switch (action.type) {
        case 'ADD_FEELING':
            const feeling = action.payload;
            return {...state, feeling: feeling};

        case 'ADD_UNDERSTANDING':
            const understanding = action.payload;
            return {...state, understanding: understanding};

        case 'ADD_SUPPORT':
            const support = action.payload;
            return {...state, support: support};

        case 'ADD_COMMENTS':
            const comments = action.payload;
            return {...state, comments: comments};

        case 'CLEAR_FEEDBACK':
            return INITIAL_STATE;   

        default:
            return state;
    }
}

const rootReducer = combineReducers({feedbackHistory, currentFeedback});

export default rootReducer;
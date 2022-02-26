import {combineReducers} from 'redux';

// reducers

// this reducer stores feedback history that is sent from database to axios request and dispatched here
const feedbackHistory = (state=[], action) => {

    if (action.type === 'STORE_FEEDBACK_HISTORY') {
        return action.payload;
    }
    return state;
}

// this reducer stores current feedback properties with its values and gets updated every time
// a section of the form is received
const storeCurrentFeedback = (state={feeling: 0, content: 0, support: 0, comments: '', flagged: false}, action) => {    

    // evaluate action.type from dispatch and add payload data accordingly
    switch (action.type) {
        case 'ADD_FEELING':
            const feeling = action.payload;
            return {...state, feeling: feeling};

        case 'ADD_CONTENT':
            const content = action.payload;
            return {...state, content: content};

        case 'ADD_SUPPORT':
            const support = action.payload;
            return {...state, support: support};

        case 'ADD_COMMENTS':
            const comments = action.payload;
            return {...state, comments: comments};

        case 'ADD_FLAGGED':
            const flagged = action.payload;
            return {...state, flagged: flagged};

        default:
            return state;
    }
}

const rootReducer = combineReducers({feedbackHistory, storeCurrentFeedback});

export default rootReducer;
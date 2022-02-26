import {combineReducers} from 'redux';

// reducers
const feedbackHistory = (state=[], action) => {

    if (action.type === 'STORE_FEEDBACK_HISTORY') {
        return action.payload;
    }
    return state;
}

const rootReducer = combineReducers({feedbackHistory});

export default rootReducer;
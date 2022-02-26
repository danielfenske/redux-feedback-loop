// import necessary redux/react components for this page
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const Comments = () => {
    // declare state variable for comments
    const [comments, setComments] = useState('');

    // declare variable for useDispatch
    const dispatch = useDispatch();

    // declare variable for useHistory
    const history = useHistory();

    const handleInputChange = (event) => {
        setComments(event.target.value);
    }

    // stores input value to dispatch to reducer; sends user to next section of form
    const handleClick = () => {
        console.log('in handleClick');

        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        })
        history.push('/review')

    }

    return (
        <div className="formContainer">
            <h1>Comments</h1>
            <p>Any comments you want to leave?</p>

            <input
                type="text"
                onChange={handleInputChange}
                placeholder="enter comments here"
            />

            <button onClick={handleClick}>Next</button>
        </div>
    );
}

export default Comments;
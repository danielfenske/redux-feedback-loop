// import necessary redux/react components for this page
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const Understanding = () => {
    // declare state variable for understanding
    const [understanding, setUnderstanding] = useState('');

    // declare variable for useDispatch
    const dispatch = useDispatch();

    // declare variable for useHistory
    const history = useHistory();

    const handleInputChange = (event) => {
        setUnderstanding(event.target.value);
    }

    // stores input value to dispatch to reducer; sends user to next section of form
    const handleClick = () => {
        console.log('in handleClick');

        if (understanding !== '') {
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: Number(understanding)
            })

            history.push('/support');
        } else {
            alert(`Please let us know how you feel about today's content`);
        }
    }

    return (
        <div className="formContainer">
            <h1>Content</h1>
            <p>How well do you understand today's content?</p>

            <input
                type="number"
                onChange={handleInputChange}
                placeholder="choose between 1-5"
                min="0"
                max="5"
            />
            
            <button onClick={handleClick}>Next</button>
        </div>
    );
}

export default Understanding;
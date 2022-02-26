// import necessary redux/react components for this page
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const Feeling = () => {
    // declare state variable for feeling
    const [feeling, setFeeling] = useState('');

    // declare variable for useDispatch
    const dispatch = useDispatch();

    // declare variable for useHistory
    const history = useHistory();

    const handleInputChange = (event) => {
        setFeeling(event.target.value);
    }

    // stores input value to dispatch to reducer; sends user to next section of form
    const handleClick = () => {
        console.log('in handleClick');

        if (feeling !== '') {
            dispatch({
                type: 'ADD_FEELING',
                payload: Number(feeling)
            })

            // history.push('/content');
        } else {
            alert(`Please let us know how you're feeling`);
        }
    }

    return (
        <div className="formContainer">
            <h1>Feeling</h1>
            <p>How are you feeling today?</p>

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

export default Feeling;
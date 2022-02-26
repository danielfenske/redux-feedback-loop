// import necessary redux/react components for this page
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const Support = () => {
    // declare state variable for support
    const [support, setSupport] = useState('');

    // declare variable for useDispatch
    const dispatch = useDispatch();

    // declare variable for useHistory
    const history = useHistory();

    const handleInputChange = (event) => {
        setSupport(event.target.value);
    }

    // stores input value to dispatch to reducer; sends user to next section of form
    const handleClick = () => {
        console.log('in handleClick');

        if (support !== '') {
            dispatch({
                type: 'ADD_SUPPORT',
                payload: Number(support)
            })

            history.push('/comments');
        } else {
            alert(`Please let us know if you felt supported today`);
        }
    }

    return (
        <div className="formContainer">
            <h1>Support</h1>
            <p>How well are you being supported?</p>

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

export default Support;
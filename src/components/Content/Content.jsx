// import necessary redux/react components for this page
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const Content = () => {
    // declare state variable for content
    const [content, setContent] = useState('');

    // declare variable for useDispatch
    const dispatch = useDispatch();

    // declare variable for useHistory
    const history = useHistory();

    const handleInputChange = (event) => {
        setContent(event.target.value);
    }

    // stores input value to dispatch to reducer; sends user to next section of form
    const handleClick = () => {
        console.log('in handleClick');

        if (content !== '') {
            dispatch({
                type: 'ADD_CONTENT',
                payload: Number(content)
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

export default Content;
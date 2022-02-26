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

    return (
        <div className="formContainer">
            <h1>Feeling</h1>
            <p>How are you feeling today?</p>

            
        </div>
    );
}

export default Feeling;
// import necessary redux/react components for this page
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

// import Material UI
import { Typography, Rating, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

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

            history.push('/understanding');
        } else {
            alert(`Please let us know how you're feeling`);
        }
    }

    console.log('feeling:', feeling);

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(teal[500]),
        backgroundColor: teal[500],
        '&:hover': {
            backgroundColor: teal[700],
        },
    }));

    return (
        <div className="formContainer">
            <h1>Feeling</h1>
            <p>How are you feeling today?</p>

            {/* <input
                type="number"
                onChange={handleInputChange}
                placeholder="choose between 1-5"
                min="0"
                max="5"
            /> */}

            <Typography component="legend"></Typography>
            <Rating
                name="simple-controlled"
                onChange={handleInputChange}
            />

            {/* <button onClick={handleClick}>Next</button> */}
            <ColorButton variant="text" onClick={handleClick}>Next<ArrowForwardIcon fontSize="small"/></ColorButton>

        </div>
    );
}

export default Feeling;
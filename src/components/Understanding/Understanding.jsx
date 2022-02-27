// import necessary redux/react components for this page
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

// import Material UI
import { Rating, Button, Container, styled, Card, CardContent, CardActions } from '@mui/material';
import { teal } from '@mui/material/colors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// import CSS
import './Understanding.css'

const Understanding = () => {
    // declare state variable for understanding
    const [understanding, setUnderstanding] = useState('');

    // declare variable for useDispatch
    const dispatch = useDispatch();

    // declare variable for useHistory
    const history = useHistory();

    // useSelector to grab current value in feedback
    const currentUnderstanding = useSelector((store) => (store.currentFeedback.understanding));

    const handleInputChange = (event) => {
        setUnderstanding(event.target.value);
    }

    // stores input value to dispatch to reducer; sends user to next section of form
    const handleNextButton = () => {
        console.log('in handleNextButton');

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

    const handleBackButton = () => {
        console.log('in handleBackButton');
    }

    const FilledButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(teal[500]),
        backgroundColor: teal[500],
        '&:hover': {
            backgroundColor: teal[700],
        },
    }));

    return (
        <>
            {/* <div className="formContainer">
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
            </div> */}

            <Container maxWidth="sm">

                <div className="progressBar">
                    <div className="progressBarStatus"></div>
                </div>

                <Card>
                    <CardContent>
                        <h1>Content</h1>
                        <p>How well do you understand today's content?</p>

                        <Rating
                            name="simple-controlled"
                            defaultValue={currentUnderstanding}
                            onChange={handleInputChange}
                            size="large"
                        />
                    </CardContent>

                    <CardActions className="cardActionContainer">
                        <Button size="small" sx={{ color: 'teal' }} onClick={handleBackButton}><ArrowBackIcon fontSize="small" />Back</Button>
                        <FilledButton size="small" onClick={handleNextButton}>Next<ArrowForwardIcon fontSize="small" /></FilledButton>
                    </CardActions>
                </Card>
            </Container>
        </>
    );
}

export default Understanding;
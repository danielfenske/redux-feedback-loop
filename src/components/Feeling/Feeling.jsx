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
import './Feeling.css';

const Feeling = () => {
    // declare state variable for feeling
    const [feeling, setFeeling] = useState('');

    // declare variable for useDispatch
    const dispatch = useDispatch();

    // declare variable for useHistory
    const history = useHistory();

    // useSelector to grab current value in feedback
    const currentFeeling = useSelector((store) => (store.currentFeedback.feeling));

    const handleInputChange = (event) => {
        setFeeling(event.target.value);
    }

    // stores input value to dispatch to reducer; sends user to next section of form
    const handleNextButton = () => {
        console.log('in handleNextButton');

        if (feeling === '') {
            alert(`Please let us know how you're feeling`);
        } else {
            dispatch({
                type: 'ADD_FEELING',
                payload: Number(feeling)
            })

            history.push('/understanding');
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
            </div> */}

            <Container maxWidth="sm">

                <div className="progressBar">
                    <div className="progressBarFeeling"></div>
                </div>

                <Card>
                    <CardContent>
                        <h1>Feeling</h1>
                        <p>How are you feeling today?</p>

                        <Rating
                            name="simple-controlled"
                            defaultValue={currentFeeling}
                            onChange={handleInputChange}
                            size="large"
                        />
                    </CardContent>

                    <CardActions className="cardActionContainer">
                        <Button 
                        size="small" 
                        sx={{ color: 'teal' }} 
                        onClick={handleBackButton}>
                            <ArrowBackIcon fontSize="small"/>Back
                        </Button>

                        <FilledButton 
                        size="small" 
                        onClick={handleNextButton}>
                            Next<ArrowForwardIcon fontSize="small"/>
                        </FilledButton>

                    </CardActions>
                </Card>
            </Container>
        </>
    );
}

export default Feeling;
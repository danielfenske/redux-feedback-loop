// import necessary redux/react components for this page
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

// import Material UI
import { Typography, Rating, Button, Container, styled, Card, CardContent, CardActions } from '@mui/material';
import { teal } from '@mui/material/colors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    const handleNextButton = () => {
        console.log('in handleNextButton');

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

    const handleBackButton = () => {
        console.log('in handleNextButton');

        if (feeling !== '') {
            dispatch({
                type: 'ADD_FEELING',
                payload: Number(feeling)
            })

            history.push('/');
        } else {
            alert(`Please let us know how you're feeling`);
        }
    }

    console.log('feeling:', feeling);

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
            <Container maxWidth="xs">
                <Card>
                    <CardContent>
                        <h1>Feeling</h1>
                        <p>How are you feeling today?</p>

                        <Rating
                            name="simple-controlled"
                            onChange={handleInputChange}
                        />
                    </CardContent>

                    <CardActions className="cardActionContainer">
                        <Button size="small" sx={{color: 'teal'}} onClick={handleBackButton}><ArrowBackIcon fontSize="small" />Back</Button>
                        <FilledButton size="small" onClick={handleNextButton}>Next<ArrowForwardIcon fontSize="small" /></FilledButton>
                    </CardActions>
                </Card>
            </Container>
        </>
    );
}

export default Feeling;
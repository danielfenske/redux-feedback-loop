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
    const [understanding, setUnderstanding] = useState(null);

    // declare variable for useDispatch
    const dispatch = useDispatch();

    // declare variable for useHistory
    const history = useHistory();

    const handleInputChange = (event) => {
        setUnderstanding(event.target.value);
    }

    // stores input value to dispatch to reducer; sends user to next section of form
    const handleNextButton = () => {

        if (understanding === null) {
            alert(`Please let us know how you feel about today's content`);
        } else {
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: Number(understanding)
            })

            history.push('/support');
        }
    }

    const handleBackButton = () => {
        console.log('in handleBackButton');

        history.push('/feeling');
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
            <Container maxWidth="sm">

                <div className="progressBar">
                    <div className="progressBarUnderstanding"></div>
                    <div className="circle"></div>
                </div>

                <Card>
                    <CardContent>
                        <h1>Content</h1>
                        <p>How well do you understand today's content?</p>

                        <Rating
                            name="simple-controlled"
                            defaultValue={null}
                            onChange={handleInputChange}
                            size="large"
                        />
                    </CardContent>

                    <CardActions className="cardActionContainer">
                        <Button
                            size="small" sx={{ color: 'teal' }}
                            onClick={handleBackButton}>
                            <ArrowBackIcon fontSize="small" />Back
                        </Button>

                        <FilledButton
                            size="small"
                            onClick={handleNextButton}>
                            Next<ArrowForwardIcon fontSize="small" />
                        </FilledButton>

                    </CardActions>
                </Card>
            </Container>
        </>
    );
}

export default Understanding;
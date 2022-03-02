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
import './Support.css';

const Support = () => {
    // declare state variable for support
    const [support, setSupport] = useState(null);

    // declare variable for useDispatch
    const dispatch = useDispatch();

    // declare variable for useHistory
    const history = useHistory();

    const handleInputChange = (event) => {
        setSupport(event.target.value);
    }

    // stores input value to dispatch to reducer; sends user to next section of form
    const handleNextButton = () => {
        console.log('in handleNextButton');

        if (support === null) {
            alert(`Please let us know if you felt supported today`);

        } else {
            dispatch({
                type: 'ADD_SUPPORT',
                payload: Number(support)
            })

            history.push('/comments');
        }
    }

    const handleBackButton = () => {
        console.log('in handleBackButton');

        history.push('/understanding');
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
                    <div className="progressBarSupport"></div>
                </div>

                <Card>
                    <CardContent>
                        <h1>Support</h1>
                        <p>How well are you being supported?</p>

                        <Rating
                            name="simple-controlled"
                            defaultValue={null}
                            onChange={handleInputChange}
                            size="large"
                        />
                    </CardContent>

                    <CardActions className="cardActionContainer">
                        <Button 
                        size="small" 
                        sx={{ color: 'teal' }} 
                        onClick={handleBackButton}>
                            <ArrowBackIcon fontSize="small" />Back
                        </Button>

                        <FilledButton 
                        size="small" 
                        onClick={handleNextButton}
                            >Next<ArrowForwardIcon fontSize="small" />
                        </FilledButton>

                    </CardActions>
                </Card>
            </Container>
        </>
    );
}

export default Support;
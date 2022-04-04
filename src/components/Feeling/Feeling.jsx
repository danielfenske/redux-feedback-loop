// import necessary redux/react components for this page
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

// import Material UI
import { Rating, Button, Container, styled, Card, CardContent, CardActions } from '@mui/material';
import { teal } from '@mui/material/colors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// import CSS
import './Feeling.css';

const Feeling = () => {
    // declare state variable for feeling
    const [feeling, setFeeling] = useState(null);

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

        if (feeling === null) {
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

        dispatch({
            type: 'CLEAR_FEEDBACK'
        })

        history.push('/');
    }

    // const FilledButton = styled(Button)(({ theme }) => ({
    //     color: theme.palette.getContrastText(teal[500]),
    //     backgroundColor: teal[500],
    //     '&:hover': {
    //         backgroundColor: teal[700],
    //     },
    // }));

    return (
        <>
            <Container maxWidth="sm">

                <div className="progressBar">
                    <div className="progressBarFeeling"></div>
                    <div className="circle"></div>
                </div>

                <Card>
                    <CardContent>
                        <h1>Feeling</h1>
                        <p>How are you feeling today?</p>

                        <form>
                            <Rating
                                name="simple-controlled"
                                defaultValue={null}
                                onChange={handleInputChange}
                                size="large"
                            />
                        </form>

                    </CardContent>

                    <CardActions className="cardActionContainer">
                        <Button
                            size="small"
                            onClick={handleBackButton}>
                            <ArrowBackIcon fontSize="small" />
                            <HomeRoundedIcon fontSize="small" />
                        </Button>

                        <Button
                            size="small"
                            variant="contained"
                            onClick={handleNextButton}>
                            Next<ArrowForwardIcon fontSize="small" />
                        </Button>

                    </CardActions>
                </Card>
            </Container>
        </>
    );
}

export default Feeling;
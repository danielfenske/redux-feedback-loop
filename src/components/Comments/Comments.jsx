// import necessary redux/react components for this page
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

// import Material UI
import { Button, Container, styled, Card, CardContent, CardActions, TextField } from '@mui/material';
import { teal } from '@mui/material/colors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// import CSS
import './Comments.css';

const Comments = () => {
    // declare state variable for comments
    const [comments, setComments] = useState('');

    // declare variable for useDispatch
    const dispatch = useDispatch();

    // declare variable for useHistory
    const history = useHistory();

    // useSelector to grab current value in feedback
    const currentComments = useSelector((store) => (store.currentFeedback.comments));

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setComments(event.target.value);
    }

    // stores input value to dispatch to reducer; sends user to next section of form
    const handleNextButton = () => {
        console.log('in handleNextButton');

        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        })
        history.push('/review')
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

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: 'teal',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'teal',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'teal',
            },
            '&:hover fieldset': {
                borderColor: 'teal',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'teal',
            },
        },
    });

    return (
        <>
            {/* <div className="formContainer">
                <h1>Comments</h1>
                <p>Any comments you want to leave?</p>

                <input
                    type="text"
                    onChange={handleInputChange}
                    placeholder="enter comments here"
                />

                <button onClick={handleNextButton}>Next</button>
            </div> */}

            <Container maxWidth="sm">

                <div className="progressBar">
                    <div className="progressBarStatus"></div>
                </div>

                <Card>
                    <CardContent>
                        <h1>Comments</h1>
                        <p>Any comments you want to leave?</p>

                        {/* <TextField
                            id="custom-css-outlined-input"
                            label="Enter comments"
                            multiline
                            maxRows={6}
                            defaultValue={currentComments}
                            onChange={handleInputChange}
                        /> */}

                        <CssTextField 
                            label="Custom CSS" 
                            id="custom-css-outlined-input" 
                            onChange={handleInputChange} 
                        />

                    </CardContent>

                    <CardActions className="cardActionContainer">
                        <Button size="small" sx={{ color: 'teal' }} onClick={handleBackButton}><ArrowBackIcon fontSize="small" />Back</Button>
                        <FilledButton size="small" onClick={handleNextButton}>Review<ArrowForwardIcon fontSize="small" /></FilledButton>
                    </CardActions>
                </Card>
            </Container>
        </>
    );
}

export default Comments;
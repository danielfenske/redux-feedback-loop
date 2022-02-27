// import necessary redux/react components for this page
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

// import Material UI
import { Button, Container, styled, Card, CardContent, CardActions } from '@mui/material';
import { teal } from '@mui/material/colors';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import CSS
import './Success.css';

const Success = () => {
    // declare useHistory as new variable
    const history = useHistory();

    // declare useSelector as new variable (gets state of feedbackHistory reducer)
    const feedbackHistory = useSelector((store) => store.feedbackHistory);

    const handleHomeButton = () => {
        console.log('in handleClick');

        history.push('/');
    }

    const handleNewFeedbackButton = () => {
        console.log('in handleNewFeedbackButton');

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
            {/* <div className="formContainer">
                <h1>Success!</h1>
                <p>We have received your submission.</p>
                <button onClick={handleNewFeedbackButton}>Enter New Feedback</button>

                <h1>Feedback History</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {feedbackHistory.map((feedback, id) =>
                            <tr key={id}>
                                <td>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.support}</td>
                                <td>{feedback.comments}</td>
                                <td>{feedback.date}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div> */}

            <Container maxWidth="sm">

                <Card>
                    <CardContent>
                        <DoneAllRoundedIcon fontSize="large" sx={{color: 'teal'}}/>
                        <h1>Success!</h1>
                        <p>We have received your submission.</p>
                    </CardContent>

                    <CardActions className="successContainer">                        
                        <FilledButton size="small" onClick={handleHomeButton}><HomeRoundedIcon fontSize="small"/></FilledButton>
                        <Button size="small" sx={{ color: 'teal' }} onClick={handleNewFeedbackButton}>Enter New Feedback<ArrowForwardIcon fontSize="small" /></Button>
                    </CardActions>
                </Card>
            </Container>
        </>
    );
}

export default Success;
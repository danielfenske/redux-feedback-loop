// import necessary redux/react components for this page
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

// import Material UI
import { Button, Container, styled, Card, CardContent, CardActions } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { teal } from '@mui/material/colors';

// import CSS
import './Review.css';

const Review = ({ postCurrentFeedback }) => {

    // grab currentFeedback state from redux to render on DOM
    const currentFeedback = useSelector((store) => (store.currentFeedback));

    // declare variable for useHistory
    const history = useHistory();

    // this click listener sends student back to home page and initiates axios POST request to server (taken in via props)
    const handleNextButton = () => {
        console.log('in handleNextButton');

        postCurrentFeedback();

        history.push('/success');
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
            <div className="formContainer">
                <h1>Review</h1>

                <table>
                    <tbody>
                        <tr><th>Feeling</th><td>{currentFeedback.feeling}</td></tr>
                        <tr><th>Understanding</th><td>{currentFeedback.understanding}</td></tr>
                        <tr><th>Support</th><td>{currentFeedback.support}</td></tr>
                        <tr><th>Comments</th><td>{currentFeedback.comments}</td></tr>
                    </tbody>
                </table>

                <button onClick={handleNextButton}>Submit</button>
            </div>

            <Container maxWidth="sm">

                <div className="progressBar">
                    <div className="progressBarStatus"></div>
                </div>

                <Card>
                    <CardContent>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow><TableCell sx={{fontWeight: 'bold'}}>Feeling</TableCell><TableCell>{currentFeedback.feeling}</TableCell></TableRow>
                                    <TableRow><TableCell sx={{fontWeight: 'bold'}}>Understanding</TableCell><TableCell>{currentFeedback.understanding}</TableCell></TableRow>
                                    <TableRow><TableCell sx={{fontWeight: 'bold'}}>Support</TableCell><TableCell>{currentFeedback.support}</TableCell></TableRow>
                                    <TableRow><TableCell sx={{fontWeight: 'bold'}}>Comments</TableCell><TableCell>{currentFeedback.comments}</TableCell></TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </CardContent>

                    <CardActions className="submitContainer">
                        <FilledButton size="small" onClick={handleNextButton}>Submit</FilledButton>
                    </CardActions>
                </Card>
            </Container>
        </>
    );
}

export default Review;
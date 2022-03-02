// import necessary redux/react components for this page
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

// import Material UI
import { Rating, Button, Container, styled, Card, CardContent, CardActions } from '@mui/material';
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
                    <div className="progressBarReview"></div>
                </div>

                <Card>
                    <CardContent>
                    <h1>Review</h1>
                        <TableContainer>
                            <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Feeling</TableCell>
                                        <TableCell>
                                            <Rating
                                                name="simple-controlled"
                                                value={currentFeedback.feeling}
                                                size="medium"
                                                disabled
                                            />
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Understanding</TableCell>
                                        <TableCell>
                                            <Rating
                                                name="simple-controlled"
                                                value={currentFeedback.understanding}
                                                size="medium"
                                                disabled
                                            />
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Support</TableCell>
                                        <TableCell>
                                            <Rating
                                                name="simple-controlled"
                                                value={currentFeedback.support}
                                                size="medium"
                                                disabled
                                            />
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Comments</TableCell>
                                        <TableCell>{currentFeedback.comments}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>

                    <CardActions className="submitContainer">
                        <FilledButton 
                        size="small" 
                        onClick={handleNextButton}>
                            Submit
                        </FilledButton>
                    </CardActions>
                </Card>
            </Container>
        </>
    );
}

export default Review;
// import necessary redux/react components for this page
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';


// import Material UI
import { Rating, Button, Container, styled, Card, CardContent, CardActions } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { teal } from '@mui/material/colors';

// import CSS
import './Home.css'

const Home = () => {
    // declare useHistory as new variable
    const history = useHistory();

    // declare useSelector as new variable (gets state of feedbackHistory reducer)
    const feedbackHistory = useSelector((store) => store.feedbackHistory);

    const handleNextButton = () => {
        console.log('in handleNextButton');

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
                <h1>Feedback</h1>
                <button onClick={handleNextButton}>Get Started</button>

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

            <Container maxWidth="md">

                <Card>
                    <h1>Feedback</h1>
                    <p>We want to hear from you!</p>
                    <CardActions className="startContainer">
                        <FilledButton size="medium" onClick={handleNextButton}>Get Started</FilledButton>
                    </CardActions>

                    <CardContent>
                        <TableContainer>
                            <h3>Feedback History</h3>
                            <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{fontWeight: 'bold'}}>Feeling</TableCell>
                                        <TableCell sx={{fontWeight: 'bold'}}>Understanding</TableCell>
                                        <TableCell sx={{fontWeight: 'bold'}}>Support</TableCell>
                                        <TableCell sx={{fontWeight: 'bold'}}>Comments</TableCell>
                                        <TableCell sx={{fontWeight: 'bold'}}>Date</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {feedbackHistory.map((feedback) => (
                                        <TableRow
                                            key={feedback.id}
                                        >
                                            <TableCell component="th" scope="row">
                                                {feedback.feeling}
                                            </TableCell>
                                            <TableCell>{feedback.understanding}</TableCell>
                                            <TableCell>{feedback.support}</TableCell>
                                            <TableCell>{feedback.comments}</TableCell>
                                            <TableCell>{feedback.date}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}

export default Home;
// import necessary redux/react components for this page
import { useState } from "react";
import { useSelector } from "react-redux";

// import Material UI
import { Container, styled, Card, CardContent} from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { teal } from '@mui/material/colors';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Admin = () => {

    // declare useSelector as new variable (gets state of feedbackHistory reducer)
    const feedbackHistory = useSelector((store) => store.feedbackHistory);

    return (
        <Container maxWidth="md">
            <Card>
                <h1>Admin</h1>
                <CardContent>
                    <TableContainer>
                        <h3>Feedback History</h3>
                        <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Feeling</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Understanding</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Support</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Comments</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Flag</TableCell>
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
                                        {(feedback.flagged) 
                                        ? (<TableCell><BookmarkIcon fontSize="small" sx={{color: 'teal'}}/></TableCell>) 
                                        : (<TableCell><BookmarkBorderIcon fontSize="small" sx={{color: 'teal'}}/></TableCell>)}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Container>
    );
}

export default Admin;
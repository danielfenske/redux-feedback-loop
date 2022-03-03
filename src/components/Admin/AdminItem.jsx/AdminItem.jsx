// import necessary redux/react components for this page
import { useDispatch } from "react-redux";

// import Material UI
import { TableCell, TableRow } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const AdminItem = ({ feedback, updateFeedbackSubmission }) => {

    // declare variable for useDispatch
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log('in handleClick');

        let bundledObject = { flagged: !feedback.flagged, id: feedback.id };

        updateFeedbackSubmission(bundledObject);
    }

    return (
        <>
            <TableRow>
                <TableCell component="th" scope="row">
                    {feedback.feeling}
                </TableCell>
                <TableCell>{feedback.understanding}</TableCell>
                <TableCell>{feedback.support}</TableCell>
                <TableCell>{feedback.comments}</TableCell>
                <TableCell>{Date(feedback.date)}</TableCell>
                {(feedback.flagged)
                    ? (<TableCell><BookmarkIcon fontSize="small" sx={{ color: 'teal' }} onClick={handleClick} /></TableCell>)
                    : (<TableCell><BookmarkBorderIcon fontSize="small" sx={{ color: 'teal' }} onClick={handleClick} /></TableCell>)}
            </TableRow>
        </>
    );
}

export default AdminItem;
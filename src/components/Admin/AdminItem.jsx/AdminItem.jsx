// import necessary redux/react components for this page
import { useState } from "react";
import { useDispatch } from "react-redux";

// import Material UI
import { TableCell, TableRow } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const AdminItem = ({ feedback, updateFeedbackSubmission }) => {

    // declare state variable for support
    const [flagged, setFlagged] = useState(feedback.flagged);

    // declare variable for useDispatch
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log('in handleClick', flagged);

        let id = feedback.id;
        setFlagged(!flagged);

        let bundledObject = { flagged: flagged, id: id };

        dispatch({
            type: 'UPDATE_FLAGGED',
            payload: bundledObject
        });

        updateFeedbackSubmission();
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
                <TableCell>{feedback.date}</TableCell>
                {(feedback.flagged)
                    ? (<TableCell><BookmarkIcon fontSize="small" sx={{ color: 'teal' }} onClick={handleClick} /></TableCell>)
                    : (<TableCell><BookmarkBorderIcon fontSize="small" sx={{ color: 'teal' }} onClick={handleClick} /></TableCell>)}
            </TableRow>
        </>
    );
}

export default AdminItem;
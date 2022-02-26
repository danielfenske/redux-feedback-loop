// import necessary redux/react components for this page
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

const Review = ({postCurrentFeedback}) => {

    // grab currentFeedback state from redux to render on DOM
    const currentFeedback = useSelector((store) => (store.currentFeedback));

    // declare variable for useHistory
    const history = useHistory();
    
    // this click listener sends student back to home page and initiates axios POST request to server (taken in via props)
    const handleClick = () => {
        console.log('in handleClick');

        postCurrentFeedback();

        history.push('/');
    }

    return (
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

            <button onClick={handleClick}>Submit</button>
        </div>
    );
}

export default Review;
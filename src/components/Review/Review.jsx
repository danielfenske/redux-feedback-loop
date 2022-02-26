// import necessary redux/react components for this page
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

const Review = ({postCurrentFeedback}) => {

    const currentFeedback = useSelector((store) => (store.currentFeedback));

    console.log('currentFeedback', currentFeedback);

    const handleClick = () => {
        console.log('in handleClick');

        postCurrentFeedback();
    }

    return (
        <div className="formContainer">
            <h1>Review</h1>

            <table>
                <tbody>
                    <tr><th>Feeling</th><td>{currentFeedback.feeling}</td></tr>
                    <tr><th>Content</th><td>{currentFeedback.content}</td></tr>
                    <tr><th>Support</th><td>{currentFeedback.support}</td></tr>
                    <tr><th>Comments</th><td>{currentFeedback.comments}</td></tr>
                </tbody>
            </table>

            <button onClick={handleClick}>Submit</button>
        </div>
    );
}

export default Review;
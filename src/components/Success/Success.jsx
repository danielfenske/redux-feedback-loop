// import necessary redux/react components for this page
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

const Success = () => {
    // declare useHistory as new variable
    const history = useHistory();

    // declare useSelector as new variable (gets state of feedbackHistory reducer)
    const feedbackHistory = useSelector((store) => store.feedbackHistory);

    const handleClick = () => {
        console.log('in handleClick');

        history.push('/feeling');
    }

    return (
        <div className="formContainer">
            <h1>Success!</h1>
            <p>We have received your submission.</p>
            <button onClick={handleClick}>Enter New Feedback</button>

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
        </div>
    );
}

export default Success;
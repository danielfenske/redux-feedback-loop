// import necessary redux/react components for this page
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

const Home = () => {
    // declare useHistory as new variable
    const history = useHistory();

    // declare useSelector as new variable (gets state of feedbackHistory reducer)
    const feedbackHistory = useSelector((store) => store.feedbackHistory);

    console.log('feedbackHistory', feedbackHistory);

    return (
        <>
            <h1>Feedback</h1>

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
                        <tr>
                            <td>{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                            <td>{feedback.date}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default Home;
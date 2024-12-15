import styles from '../Feedback/Feedback.module.css'


export default function Feedback ({feedback, total, positive}){

    return (
        <div>
            <ul className={styles.list_feedback}>
                <li>
                    <p>Good: {feedback.good}</p>
                </li>

                <li>
                    <p>Neutral: {feedback.neutral}</p>
                </li>

                <li>
                    <p>Bad: {feedback.bad}</p>
                </li>

                <li>
                    <p>Total: {total}</p>
                </li>

                <li>
                    <p>Positive feedback: {positive}%</p>
                </li>

            </ul>
        </div>
    )
}
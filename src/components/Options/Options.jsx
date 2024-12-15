import styles from '../Options/Options.module.css'


export default function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list_options}>
        <li>
          <button onClick={() => updateFeedback('good')} className={styles.btn}>
            Good
          </button>
        </li>
        <li>
          <button onClick={() => updateFeedback('neutral')} className={styles.btn}>
            Neutral
          </button>
        </li>
        <li>
          <button onClick={() => updateFeedback('bad')} className={styles.btn}>
            Bad
          </button>
        </li>
        {totalFeedback > 0 && (
          <li>
            <button onClick={resetFeedback} className={styles.btn}>
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

import styles from './Toggle.module.css';

export default function Toggle({ toggled, onClick }) {
  return (
    <button onClick={onClick} className={`${styles['toggle-btn']} ${toggled ? styles.toggled : ''}`}>
      <div className={styles.thumb}></div>
    </button>
  );
}

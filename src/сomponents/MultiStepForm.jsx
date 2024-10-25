import styles from './MultiStepForm.module.css';
import Sidebar from './Sidebar/Sidebar';

export default function MultiStepForm() {
  return (
    <form className={styles['adaptive-container']}>
      <Sidebar />
      <div className={styles.form}></div>
      <div className={styles.checkout}></div>
    </form>
  );
}

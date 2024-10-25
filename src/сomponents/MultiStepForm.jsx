import FormInputField from './Form/FormInputField';
import styles from './MultiStepForm.module.css';
import Sidebar from './Sidebar/Sidebar';

export default function MultiStepForm() {
  return (
    <div className={styles['adaptive-container']}>
      <Sidebar />
      <FormInputField />
      <div className={styles.checkout}></div>
    </div>
  );
}

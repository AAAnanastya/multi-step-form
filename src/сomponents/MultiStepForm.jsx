import FormInputField from './Form/FormInputField';
import FormNavigation from './FormNavigation/FormNavigation';
import styles from './MultiStepForm.module.css';
import Sidebar from './Sidebar/Sidebar';

export default function MultiStepForm() {
  return (
    <div className={styles['adaptive-container']}>
      <Sidebar />
      <FormInputField />
      <FormNavigation />
    </div>
  );
}

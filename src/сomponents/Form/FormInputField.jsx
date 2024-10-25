import styles from './FormInputField.module.css';
import PersonalInfoInput from './PersonalInfoInput';

export default function FormInputField() {
  return (
    <div className={styles.form}>
      <h1 className={styles.title}>Personal info</h1>
      <h2 className={styles.subtitle}>Please provide your name, email address and phone number.</h2>
      <PersonalInfoInput />
    </div>
  );
}

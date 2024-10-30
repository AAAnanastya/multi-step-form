import NavigationButton from './NavigationButton';
import styles from './FormNavigation.module.css';

export default function FormNavigation({ step, onForward, onBackward, onSubmit }) {
  return (
    <div className={`${styles.navigation} ${step === 1 ? styles.singleButton : ''}`}>
      {step !== 1 && (
        <NavigationButton type="backward" onClick={onBackward}>
          Go Back
        </NavigationButton>
      )}
      {step !== 4 && (
        <NavigationButton type="forward" onClick={onForward}>
          Next Step
        </NavigationButton>
      )}
      {step === 4 && (
        <NavigationButton type="confirmation" onClick={onSubmit}>
          Confirm
        </NavigationButton>
      )}
    </div>
  );
}

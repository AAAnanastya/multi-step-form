import { useState } from 'react';
import FormInputField from './Form/FormInputField';
import FormNavigation from './FormNavigation/FormNavigation';
import styles from './MultiStepForm.module.css';
import Sidebar from './Sidebar/Sidebar';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  function handleStepForward() {
    setStep((prevStep) => prevStep + 1);
  }

  function handleStepBackward() {
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <div className={styles['adaptive-container']}>
      <Sidebar step={step} />
      <FormInputField step={step} />
      <FormNavigation step={step} onForward={handleStepForward} onBackward={handleStepBackward} />
    </div>
  );
}

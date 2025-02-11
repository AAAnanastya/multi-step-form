import { useState } from 'react';
import FormInputField from './Form/FormInputField';
import FormNavigation from './FormNavigation/FormNavigation';
import styles from './MultiStepForm.module.css';
import Sidebar from './Sidebar/Sidebar';
import ConfirmationScreen from './Form/Summary/ConfirmationScreen';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    billingPeriod: 'monthly',
    plan: { name: 'Arcade', price: '9' },
    addOns: [],
  });

  const [errors, setErrors] = useState({});

  function handleStepForward() {
    if (step === 1) {
      const newErrors = validatePersonalInfo(formData);
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }
    setErrors({});
    setStep((prevStep) => prevStep + 1);
  }

  function handleStepBackward() {
    setStep((prevStep) => prevStep - 1);
  }

  function handleBackToPlanChanger() {
    setStep(2);
  }

  function validatePersonalInfo(data) {
    const errors = {};
    if (!data.name) {
      errors.name = 'This field is required';
    } else if (!/^(?=.{3,30}$)[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё\s.-]*$/.test(data.name)) {
      errors.name = 'Please enter your name';
    }
    if (!data.email) {
      errors.email = 'This field is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!data.phone) {
      errors.phone = 'This field is required';
    } else if (!/^8 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(data.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    return errors;
  }

  function handleInputChange(field, value) {
    if (field === 'addOns') {
      setFormData((prevData) => ({
        ...prevData,
        addOns: value,
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [field]: value }));
    }
    setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
  }

  function formHandleSubmit() {
    setStep(5);
    console.log(formData);
  }

  return (
    <div className={styles['adaptive-container']}>
      <Sidebar step={step} />
      {step !== 5 && (
        <FormInputField
          step={step}
          formData={formData}
          onInputChange={handleInputChange}
          toPlanChanger={handleBackToPlanChanger}
          errors={errors}
        />
      )}
      {step === 5 && <ConfirmationScreen />}
      {step !== 5 && (
        <FormNavigation step={step} onForward={handleStepForward} onBackward={handleStepBackward} onSubmit={formHandleSubmit} />
      )}
    </div>
  );
}

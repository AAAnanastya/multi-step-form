import { useState } from 'react';
import FormInputField from './Form/FormInputField';
import FormNavigation from './FormNavigation/FormNavigation';
import styles from './MultiStepForm.module.css';
import Sidebar from './Sidebar/Sidebar';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    billingPeriod: 'monthly',
    plan: { name: '', price: '' },
    addOns: { name: '', price: '' },
    totalPrice: '',
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

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
  };

  return (
    <div className={styles['adaptive-container']}>
      <Sidebar step={step} />
      <FormInputField step={step} formData={formData} onInputChange={handleInputChange} errors={errors} />
      <FormNavigation step={step} onForward={handleStepForward} onBackward={handleStepBackward} />
    </div>
  );
}

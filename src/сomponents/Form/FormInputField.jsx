import styles from './FormInputField.module.css';
import PersonalInfoInput from './PersonalInfo/PersonalInfoInput';
import PlanSelection from './PlanSelection/PlanSelection';
import AddOnsSelection from './AddOnsSelection/AddOnsSelection';

export default function FormInputField({ step, formData, onInputChange, errors }) {
  return (
    <div className={styles.form}>
      <h1 className={styles.title}>
        {step === 1 && 'Personal info'}
        {step === 2 && 'Select your plan'}
        {step === 3 && 'Pick add-ons'}
      </h1>
      <h2 className={styles.subtitle}>
        {step === 1 && 'Please provide your name, email address and phone number.'}
        {step === 2 && 'You have the option of monthly or yearly billing.'}
        {step === 3 && 'Add-ons help enhance your gaming experience.'}
      </h2>
      {step === 1 && <PersonalInfoInput formData={formData} onInputChange={onInputChange} errors={errors} />}
      {step === 2 && <PlanSelection />}
      {step === 3 && <AddOnsSelection />}
    </div>
  );
}

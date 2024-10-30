import styles from './FormInputField.module.css';
import PersonalInfoInput from './PersonalInfo/PersonalInfoInput';
import PlanSelection from './PlanSelection/PlanSelection';
import AddOnsSelection from './AddOnsSelection/AddOnsSelection';
import Summary from './Summary/Summary';

const SERVICES = {
  plans: { Arcade: 9, Advanced: 12, Pro: 15 },

  addOns: {
    'Online service': { description: 'Access to multiplayer games', price: 1 },
    'Larger storage': { description: 'Extra 1TB of cloud save', price: 2 },
    'Customizable profile': { description: 'Custom theme on your profile', price: 2 },
  },
};

export default function FormInputField({ step, formData, onInputChange, toPlanChanger, errors }) {
  return (
    <div className={styles.form}>
      <h1 className={styles.title}>
        {step === 1 && 'Personal info'}
        {step === 2 && 'Select your plan'}
        {step === 3 && 'Pick add-ons'}
        {step === 4 && 'Finishing up'}
      </h1>
      <h2 className={styles.subtitle}>
        {step === 1 && 'Please provide your name, email address and phone number.'}
        {step === 2 && 'You have the option of monthly or yearly billing.'}
        {step === 3 && 'Add-ons help enhance your gaming experience.'}
        {step === 4 && 'Double-check everything looks OK before confirming.'}
      </h2>
      {step === 1 && <PersonalInfoInput formData={formData} onInputChange={onInputChange} errors={errors} />}
      {step === 2 && <PlanSelection formData={formData} planVariables={SERVICES.plans} onChange={onInputChange} />}
      {step === 3 && <AddOnsSelection formData={formData} addOnsVariables={SERVICES.addOns} onChange={onInputChange} />}
      {step === 4 && <Summary formData={formData} toPlanChanger={toPlanChanger} />}
    </div>
  );
}

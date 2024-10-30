import AddOnsItem from './AddOnsItem';
import styles from './AddOnsSelection.module.css';

export default function AddOnsSelection({ formData, addOnsVariables }) {
  return (
    <div className={styles['add-ons-container']}>
      {Object.entries(addOnsVariables).map(([addOnName, { description, price }]) => (
        <AddOnsItem key={addOnName} name={addOnName} description={description} price={price} billing={formData.billingPeriod} />
      ))}
    </div>
  );
}

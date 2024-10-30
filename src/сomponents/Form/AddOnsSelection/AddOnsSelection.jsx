import AddOnsItem from './AddOnsItem';
import styles from './AddOnsSelection.module.css';

export default function AddOnsSelection({ formData, addOnsVariables, onChange }) {
  function addAddOns(selected) {
    if (formData.addOns.find((addOn) => addOn.name === selected)) {
      formData.addOns = formData.addOns.filter((addOn) => addOn.name !== selected);
    } else onChange('addOns', [...formData.addOns, { name: selected, price: addOnsVariables[selected].price }]);
  }

  return (
    <div className={styles['add-ons-container']}>
      {Object.entries(addOnsVariables).map(([addOnName, { description, price }]) => (
        <AddOnsItem
          key={addOnName}
          name={addOnName}
          description={description}
          price={price}
          billing={formData.billingPeriod}
          onSelect={() => addAddOns(addOnName)}
          isSelected={formData.addOns.find((addOn) => addOn.name === addOnName)}
        />
      ))}
    </div>
  );
}

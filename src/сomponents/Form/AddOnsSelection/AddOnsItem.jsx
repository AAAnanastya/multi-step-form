import { useState } from 'react';

import styles from './AddOnsItem.module.css';

export default function AddOnsItem({ name, description, price, billing }) {
  const [selected, setSelected] = useState(false);

  const displayPrice = billing === 'yearly' ? price * 10 : price;
  const periodLabel = billing === 'monthly' ? 'mo' : 'yr';

  const handleSelector = () => setSelected(!selected);

  return (
    <button className={`${styles['add-ons-item']} ${selected ? styles.selected : ''}`} onClick={handleSelector}>
      <div className={styles.checkmark}></div>
      <div className={styles['add-ons-description']}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <p className={styles.pricing}>
        +${displayPrice}/{periodLabel}
      </p>
    </button>
  );
}

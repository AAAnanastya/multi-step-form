import { useState } from 'react';

import styles from './AddOnsItem.module.css';

export default function AddOnsItem({ name, description, price, billing }) {
  const [selected, setSelected] = useState(false);

  const handleSelector = () => setSelected(!selected);

  return (
    <button className={`${styles['add-ons-item']} ${selected ? styles.selected : ''}`} onClick={handleSelector}>
      <div className={styles.checkmark}></div>
      <div className={styles['add-ons-description']}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <p className={styles.pricing}>
        +${price}/{billing}
      </p>
    </button>
  );
}

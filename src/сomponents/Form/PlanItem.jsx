import styles from './PlanItem.module.css';

export default function PlanItem({ img, planName, price, billing, isSelected, onSelect }) {
  const handleSelector = () => onSelect(planName);

  const displayPrice = billing === 'yearly' ? price * 10 : price;
  const periodLabel = billing === 'monthly' ? 'mo' : 'yr';

  return (
    <button className={`${styles['plan-item']} ${isSelected ? styles.selected : ''}`} onClick={handleSelector}>
      <img src={img} alt={planName} />

      <div className={styles['plan-description']}>
        <h3>{planName}</h3>

        <p>
          ${displayPrice}/{periodLabel}
        </p>

        {billing === 'yearly' && <p className={styles['additional-info']}>2 months free</p>}
      </div>
    </button>
  );
}

import { useState } from 'react';

import PlanItem from './PlanItem';
import styles from './PlanSelection.module.css';
import ArcadeImg from '../../../images/icon-arcade.svg';
import AdvancedImg from '../../../images/icon-advanced.svg';
import ProImg from '../../../images/icon-pro.svg';
import Toggle from './Toggle';

export default function PlanSelection({ formData, planVariables, onChange }) {
  const [selectedPlan, setSelectedPlan] = useState(formData.plan.name);

  let period = formData.billingPeriod;

  const [toggled, setToggled] = useState(period);

  function handleSelectPlan(planName) {
    onChange('plan', { name: planName, price: planVariables[planName] });
    setSelectedPlan(planName);
  }

  function toggleSwitcher() {
    const newPeriod = period === 'monthly' ? 'yearly' : 'monthly';
    setToggled(newPeriod);
    onChange('billingPeriod', newPeriod);
  }

  return (
    <>
      <div className={styles.plans}>
        {Object.entries(planVariables).map(([planName, price]) => (
          <PlanItem
            key={planName}
            img={planName === 'Arcade' ? ArcadeImg : planName === 'Advanced' ? AdvancedImg : ProImg}
            planName={planName}
            price={price}
            billing={period}
            isSelected={selectedPlan === planName}
            onSelect={() => handleSelectPlan(planName)}
          />
        ))}
      </div>

      <div className={styles['toggle-container']}>
        <p className={toggled === 'monthly' ? styles.selected : ''}>Monthly</p>
        <Toggle toggled={toggled === 'yearly'} onClick={toggleSwitcher} />
        <p className={toggled === 'yearly' ? styles.selected : ''}>Yearly</p>
      </div>
    </>
  );
}

import { useState } from 'react';

import PlanItem from './PlanItem';
import styles from './PlanSelection.module.css';
import ArcadeImg from '../../images/icon-arcade.svg';
import AdvancedImg from '../../images/icon-advanced.svg';
import ProImg from '../../images/icon-pro.svg';
import Toggle from './Toggle';

const PLAN_PRICES = {
  Arcade: 9,
  Advanced: 12,
  Pro: 15,
};

export default function PlanSelection() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [toggled, setToggled] = useState(false);

  const period = toggled ? 'yearly' : 'monthly';

  function handleSelectPlan(planName) {
    setSelectedPlan(planName);
  }

  function toggleSwitcher() {
    setToggled(!toggled);
  }

  return (
    <>
      <div className={styles.plans}>
        <PlanItem
          img={ArcadeImg}
          planName="Arcade"
          price={PLAN_PRICES.Arcade}
          billing={period}
          isSelected={selectedPlan === 'Arcade'}
          onSelect={handleSelectPlan}
        />
        <PlanItem
          img={AdvancedImg}
          planName="Advanced"
          price={PLAN_PRICES.Advanced}
          billing={period}
          isSelected={selectedPlan === 'Advanced'}
          onSelect={handleSelectPlan}
        />
        <PlanItem
          img={ProImg}
          planName="Pro"
          price={PLAN_PRICES.Pro}
          billing={period}
          isSelected={selectedPlan === 'Pro'}
          onSelect={handleSelectPlan}
        />
      </div>
      <div className={styles['toggle-container']}>
        <p className={!toggled ? styles.selected : ''}>Monthly</p>
        <Toggle toggled={toggled} onClick={toggleSwitcher} />
        <p className={toggled ? styles.selected : ''}>Yearly</p>
      </div>
    </>
  );
}

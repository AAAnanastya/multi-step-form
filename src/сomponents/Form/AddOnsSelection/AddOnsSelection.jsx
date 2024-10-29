import AddOnsItem from './AddOnsItem';
import styles from './AddOnsSelection.module.css';

export default function AddOnsSelection() {
  return (
    <div className={styles['add-ons-container']}>
      <AddOnsItem name="Online service" description="Access to multiplayer games" price="1" billing="mo" />
      <AddOnsItem name="Larger storage" description="Extra 1TB of cloud save" price="2" billing="mo" />
      <AddOnsItem name="Customizable profile" description="Custom theme on your profile" price="1" billing="mo" />
    </div>
  );
}

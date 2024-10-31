import SidebarItem from './SidebarItem';
import styles from './Sidebar.module.css';

export default function Sidebar({ step }) {
  return (
    <div className={styles.sidebar}>
      <SidebarItem step={step} id={1} title="Your info" />
      <SidebarItem step={step} id={2} title="Select plan" />
      <SidebarItem step={step} id={3} title="Add-ons" />
      <SidebarItem step={step} id={4} finalStep={step === 5} title="Summary" />
    </div>
  );
}

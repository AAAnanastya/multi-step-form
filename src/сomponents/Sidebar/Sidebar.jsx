import SidebarItem from './SidebarItem';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SidebarItem id="1" title="Your info" />
      <SidebarItem id="2" title="Select plan" />
      <SidebarItem id="3" title="Add-ons" />
      <SidebarItem id="4" title="Summary" />
    </div>
  );
}

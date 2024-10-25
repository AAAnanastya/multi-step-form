import styles from './SidebarItem.module.css';

export default function SidebarItem({ id, title, active }) {
  return (
    <div className={styles['sidebar-item']}>
      <button className={`${styles['step-pointer']} ${active ? styles['active'] : ''}`}>{id}</button>
      <div className={styles['sidebar-item-description']}>
        <h2 className={styles['step-subtitle']}>Step {id}</h2>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
}

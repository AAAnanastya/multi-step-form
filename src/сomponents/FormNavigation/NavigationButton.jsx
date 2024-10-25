import styles from './NavigationButton.module.css';

export default function NavigationButton({ type, onClick, children }) {
  return (
    <button className={`${styles['nav-button']} ${styles[type] || ''}`} onClick={onClick}>
      {children}
    </button>
  );
}

import NavigationButton from './NavigationButton';
import styles from './FormNavigation.module.css';

export default function FormNavigation() {
  return (
    <div className={styles.navigation}>
      {/* backward не отображается на первом шаге */}
      <NavigationButton type="backward">Go Back</NavigationButton>
      {/* forward на последнем шаге заменяется на confirm */}
      <NavigationButton type="forward">Next Step</NavigationButton>
    </div>
  );
}

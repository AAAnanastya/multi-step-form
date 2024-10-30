import styles from './ConfirmationScreen.module.css';
import thankyouIcon from '../../../images/icon-thank-you.svg';

export default function ConfirmationScreen() {
  return (
    <div className={styles['final-box']}>
      <img src={thankyouIcon} />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to
        email us at support@loremgaming.com.
      </p>
    </div>
  );
}

import styles from './PersonalInfoInput.module.css';

export default function PersonalInfoInput() {
  return (
    <form className={styles['form-input-field']}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" placeholder="e.g. Stephen King" />
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" placeholder="e.g. stephenking@lorem.com" />
      <label htmlFor="phone">Phone Number</label>
      <input id="id" type="number" placeholder="e.g. +1 234 567 890" />
    </form>
  );
}

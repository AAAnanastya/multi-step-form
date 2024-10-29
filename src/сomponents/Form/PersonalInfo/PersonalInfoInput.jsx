import styles from './PersonalInfoInput.module.css';

export default function PersonalInfoInput({ formData, onInputChange, errors }) {
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (!cleaned) return '';

    const match = cleaned.match(/^(\+7|7|8)?(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    if (match) {
      const [, countryCode, areaCode, firstPart, secondPart, thirdPart] = match;
      return `${countryCode || ''}${areaCode ? ` (${areaCode}` : ''}${firstPart ? `) ${firstPart}` : ''}${
        secondPart ? `-${secondPart}` : ''
      }${thirdPart ? `-${thirdPart}` : ''}`.trim();
    }
    return value;
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    onInputChange('phone', formattedPhone);
  };

  return (
    <form className={styles['form-input-field']}>
      <div className={styles['input-label']}>
        <label htmlFor="name">Name</label>
        {errors.name && <p>{errors.name}</p>}
      </div>
      <input
        className={errors.name ? styles.invalid : ''}
        id="name"
        type="text"
        placeholder="e.g. Stephen King"
        value={formData.name}
        onChange={(e) => onInputChange('name', e.target.value)}
      />

      <div className={styles['input-label']}>
        <label htmlFor="email">Email Address</label>
        {errors.email && <p>{errors.email}</p>}
      </div>
      <input
        className={errors.email ? styles.invalid : ''}
        id="email"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        value={formData.email}
        onChange={(e) => onInputChange('email', e.target.value)}
      />

      <div className={styles['input-label']}>
        <label htmlFor="phone">Phone Number</label>
        {errors.phone && <p>{errors.phone}</p>}
      </div>
      <input
        className={errors.phone ? styles.invalid : ''}
        id="phone"
        type="tel"
        placeholder="e.g. 8 (123) 456-78-90"
        value={formData.phone}
        onChange={handlePhoneChange}
        maxLength={17}
      />
    </form>
  );
}

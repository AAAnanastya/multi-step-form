import styles from './Summary.module.css';

export default function Summary({ formData, toPlanChanger }) {
  const periodLabel = formData.billingPeriod === 'monthly' ? 'mo' : 'yr';
  const period = formData.billingPeriod === 'monthly' ? 'month' : 'year';
  const totalPriceMonthly = formData.addOns.reduce((sum, item) => sum + item.price, formData.plan.price);
  const totalPrice = formData.billingPeriod === 'monthly' ? totalPriceMonthly : totalPriceMonthly * 10;

  return (
    <>
      <div className={styles['summary-container']}>
        <div className={styles['plan-summary']}>
          <div className={styles['plan-description']}>
            <h3>
              {formData.plan.name} ({formData.billingPeriod})
            </h3>
            <button onClick={toPlanChanger}>Change</button>
          </div>
          <p>
            ${formData.billingPeriod === 'monthly' ? formData.plan.price : formData.plan.price * 10}/{periodLabel}
          </p>
        </div>

        <hr />

        {formData.addOns.map((addOn) => (
          <div key={addOn.name} className={styles['add-on-container']}>
            <h4>{addOn.name}</h4>
            <p>
              +${formData.billingPeriod === 'monthly' ? addOn.price : addOn.price * 10}/{periodLabel}
            </p>
          </div>
        ))}
      </div>

      <div className={styles['total-price']}>
        <h4>Total (per {period})</h4>
        <p>
          +${totalPrice}/{periodLabel}
        </p>
      </div>
    </>
  );
}

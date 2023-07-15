import styles from "./Payment.module.css";
async function getData(): Promise<any> {
  return null;
}

export default async function Payments() {
  const data = await getData();
  return <div className={styles.PaymentContainer}></div>;
}

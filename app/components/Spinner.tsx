import styles from "./Spinner.module.css";

type SpinnerProps = {
  size?: "small" | "medium" | "large";
};
export default function Spinner({ size }: SpinnerProps) {
  return <div className={`${styles.Spinner} ${styles?.[`${size}`]}`}></div>;
}

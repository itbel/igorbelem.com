import styles from "./HamburgerButton.module.css";
export default function HamburgerButton({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
}) {
  return (
    <div
      role="button"
      onClick={setIsOpen}
      className={`${styles.HamburgerButton} ${isOpen ? styles.open : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

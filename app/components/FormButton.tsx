"use client";
import { useFormStatus } from "react-dom";
import styles from "./FormButton.module.css";
import Spinner from "./Spinner";

export default function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button className={styles.FormButton} type="submit" aria-disabled={pending}>
      {pending ? <Spinner size="small" /> : "Send Message"}
    </button>
  );
}

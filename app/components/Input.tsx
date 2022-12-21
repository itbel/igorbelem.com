import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Input.module.css";
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  iconSrc: string;
  iconAlt: string;
};

export default function Input({
  label,
  iconSrc,
  iconAlt,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={styles.InputContainer}>
      {label ? (
        <label htmlFor={props.name} className={styles.InputLabel}>
          {label}
        </label>
      ) : null}
      <div
        className={`${styles.InputWithIcon} ${
          isFocused ? styles.InputFocused : ""
        }`}
      >
        <Image
          className={`${styles.InputIcon} ${
            isFocused ? styles.InputIconFocused : ""
          }`}
          width={20}
          height={20}
          src={iconSrc}
          alt=""
        />
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={inputRef}
          {...props}
          className={styles.InputField}
        />
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./UpDownButton.module.css";
export default function UpDownButton() {
  const [currentPos, setCurrentPos] = useState(0);
  const doScroll = () => {
    let shouldGoDown = currentPos < 1600;
    document
      ?.getElementById(shouldGoDown ? "footer" : "hero")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const handlePosition = () => {
      setCurrentPos(window.scrollY);
    };
    window.addEventListener("scroll", handlePosition);
    return () => {
      window.removeEventListener("scroll", handlePosition);
    };
  }, []);
  const style = currentPos < 1600 ? {} : { transform: "rotate(180deg)" };
  return (
    <div
      role="button"
      aria-label={currentPos < 1600 ? "Navigate to bottom" : "Navigate to top"}
      onClick={doScroll}
    >
      <Image
        width={100}
        height={80}
        className={styles.UpDownButton}
        style={style}
        alt="Down arrow"
        src="/assets/downarrow.svg"
      />
    </div>
  );
}

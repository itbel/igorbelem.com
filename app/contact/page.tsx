"use client";
import { useState } from "react";
import Spinner from "../components/Spinner";
import styles from "./Contact.module.css";
import Image from "next/image";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  return (
    <div className={styles.ContactContainer}>
      <div className={styles.ContactInfoContainer}>
        <div style={{ flex: 1 }}>
          <h1>Contact me</h1>
          <p>Feel free to contact me and I&apos;ll respond as soon as I can</p>
        </div>

        <div className={styles.ContactButton}>
          <Image
            width={25}
            height={25}
            src="/assets/email_black.svg"
            alt="GitHub Icon"
          />
          <a
            style={{
              marginLeft: 16,
            }}
            href="mailto:igortbelem@gmail.com"
          >
            igortbelem@gmail.com
          </a>
        </div>
        <div className={styles.ContactButton}>
          <Image
            width={25}
            height={25}
            src="/assets/location_black.svg"
            alt="GitHub Icon"
          />
          <a
            style={{
              marginLeft: 16,
            }}
          >
            Toronto, ON, Canada
          </a>
        </div>
        <div className={styles.ContactIconContainer}>
          <a
            className={styles.ContactIcon}
            aria-label="Visit my GitHub profile"
            href={"https://github.com/itbel"}
          >
            <Image
              width={25}
              height={25}
              src="/assets/github_black.svg"
              alt="GitHub Icon"
            />
          </a>
          <div style={{ width: 20 }}></div>
          <a
            className={styles.ContactIcon}
            aria-label="Visit my Linkedin profile"
            href={"https://www.linkedin.com/in/igor-belem"}
          >
            <Image
              width={25}
              height={25}
              src="/assets/LIblack.svg"
              alt="LinkedIn Icon"
            />
          </a>
        </div>
      </div>
      <form className={styles.FormContainer} action="/api/email">
        <label htmlFor="name">Your Name</label>
        <div className={styles.FormInputWithIcon}>
          <Image width={20} height={20} src="/assets/person.svg" alt="arrow" />
          <input
            required
            onChange={(e) => setName(e.target.value)}
            placeholder=""
            value={name}
            type="text"
            id="name"
            name="name"
          />
        </div>

        <label htmlFor="email">Email Address</label>
        <div className={styles.FormInputWithIcon}>
          <Image width={20} height={20} src="/assets/email.svg" alt="arrow" />
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            value={email}
            type="text"
            id="email"
            name="email"
          />
        </div>

        <label htmlFor="message">Message</label>
        <textarea
          required
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Start typing your message..."
          name="message"
          rows={8}
        />
        <button className={styles.FormButton} type="submit">
          {isSending ? <Spinner /> : "Send Message"}
        </button>
      </form>
    </div>
  );
}

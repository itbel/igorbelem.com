"use client";
import { useState } from "react";
import Spinner from "../components/Spinner";
import styles from "./Contact.module.css";
import Image from "next/image";
import Input from "../components/Input";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  return (
    <div className={styles.ContactContainer}>
      <div className={styles.ContactInfoContainer}>
        <div style={{ flex: 1 }}>
          <h1> Need to get in touch?</h1>
          <p>
            Don&apos;t hesitate to send me a message and I&apos;ll respond as
            soon as I can. Looking forward to chatting!
          </p>
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
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: 16,
            marginBottom: 16,
            cursor: "default",
          }}
        >
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
        <Input
          required
          iconAlt="Person Icon"
          iconSrc="/assets/person.svg"
          label="Name"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          id="name"
          name="name"
        />
        <Input
          required
          iconAlt="Email Icon"
          iconSrc="/assets/email.svg"
          label="Email Address"
          placeholder="Your email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          id="email"
          name="email"
        />

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

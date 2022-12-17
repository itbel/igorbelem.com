"use client";
import { useState } from "react";
import Spinner from "../components/Spinner";
import styles from "./Contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  return (
    <div className={styles.ContactContainer}>
      <h1>Contact</h1>
      <h3>Feel free to contact me and I&apos;ll respond as soon as I can</h3>

      <div>
        <h4>Contact Info</h4>
        <p>igortbelem@gmail.com</p>
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        action="/api/email"
      >
        <h4>Get in touch</h4>
        <label htmlFor="name">Name</label>
        <input
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          value={name}
          type="text"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email address</label>
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          value={email}
          type="text"
          id="email"
          name="email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          style={{
            resize: "none",
          }}
          required
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Your message"
          name="message"
          rows={8}
        />
        <button style={{ maxHeight: 38, position: "relative" }} type="submit">
          {isSending ? <Spinner /> : "Submit"}
        </button>
      </form>
    </div>
  );
}

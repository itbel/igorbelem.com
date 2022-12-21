"use client";
import { useState } from "react";
import Spinner from "../components/Spinner";
import styles from "./Form.module.css";
import Input from "../components/Input";
import { useRouter } from "next/navigation";
type SendEmailParams = {
  name: string;
  email: string;
  message: string;
};
async function sendEmail({ name, email, message }: SendEmailParams) {
  const res = await fetch("/api/email", {
    method: "POST",
    body: JSON.stringify({ name, email, message }),
  });
  return res;
}
export default function Contact() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setIsLoading(true);
        try {
          const response = await sendEmail({ name, email, message });
          if (!response.ok) {
            const { message } = await response.json();
            setErrorMessage(message);
          } else {
            setIsLoading(false);
            router.push("/contact/success");
          }
        } catch (error) {
          setErrorMessage("An error occurred..");
          setIsLoading(false);
        }
      }}
    >
      <Input
        required
        iconAlt="Person Icon"
        iconSrc="/assets/person.svg"
        label="Name"
        placeholder="Your name"
        onChange={(e) => {
          setErrorMessage("");
          setName(e.target.value);
        }}
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
        onChange={(e) => {
          setErrorMessage("");
          setEmail(e.target.value);
        }}
        value={email}
        type="text"
        id="email"
        name="email"
      />

      <label htmlFor="message">Message</label>
      <textarea
        required
        value={message}
        onChange={(e) => {
          setErrorMessage("");
          setMessage(e.target.value);
        }}
        id="message"
        placeholder="Start typing your message..."
        name="message"
        rows={8}
      />
      <Spinner />
      <div className={styles.ButtonContainer}>
        {errorMessage ? (
          <p className={styles.ErrorMessage}>{errorMessage}</p>
        ) : null}

        <button className={styles.FormButton} type="submit">
          {isLoading ? <Spinner size="small" /> : "Send Message"}
        </button>
      </div>
    </form>
  );
}

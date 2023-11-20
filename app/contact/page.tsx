"use client";
import { useState } from "react";
import Spinner from "../components/Spinner";
import styles from "./Form.module.css";
import Input from "../components/Input";
import { sendEmail } from "./actions";
import { useFormState, useFormStatus } from "react-dom";
import FormButton from "../components/FormButton";



export default function Contact() {
  const [state, formAction] = useFormState(sendEmail, {message: ''});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      action={formAction}
    >
      <Input
        required
        iconAlt="Person Icon"
        iconSrc="/assets/person.svg"
        label="Name"
        placeholder="Your name"
        onChange={(e) => {
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
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
        id="message"
        placeholder="Start typing your message..."
        name="message"
        rows={8}
      />
      <Spinner />
      <div className={styles.ButtonContainer}>
        {state?.message ? (
          <p className={styles.ErrorMessage}>{state?.message}</p>
        ) : null}

        <FormButton />
      </div>
    </form>
  );
}

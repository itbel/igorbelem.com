"use client";
import styles from "./Contact.module.css";
import Image from "next/image";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <div className={styles.ContactLocation}>
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
      <div className={styles.FormContainer}>{children}</div>
    </div>
  );
}

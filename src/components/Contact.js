import React, { useState } from "react";
import "./Contact.scss";
import Axios from "axios";
import Spinner from "./Spinner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      if (message.length > 10) {
        if (message.length < 10000) {
          let emailData = {
            name: name,
            email: email,
            message: message,
          };
          try {
            setIsSending(true);
            const response = await Axios({
              method: "post",
              url: `https://33qka4mlhl.execute-api.us-east-1.amazonaws.com/prod/contact`,
              data: {
                body: emailData.message,
                email: emailData.email,
              },
              headers: {
                "x-api-key": "5DCuVm7b9AZDGeOyak2k7pGBSe3ZnEk2b3v27cf0",
                "Content-Type": "application/json",
              },
            });
            console.log(response);
            alert("Message was sent successfully");
            setName("");
            setEmail("");
            setMessage("");
          } catch (err) {
            console.error(err);
            setIsSending(false);
            alert(
              "An error occured. Please try again later, or contact through e-mail"
            );
          } finally {
            setIsSending(false);
          }
        } else {
          alert("Message must not exceed 10,000 characters");
        }
      } else {
        alert("Message length must be greater than 10");
      }
    } else {
      alert("All fields must be entered!");
    }
  };
  return (
    <footer id="contact" className="contact_container">
      <h1>Contact</h1>
      <h3>Feel free to contact me and I'll respond as soon as I can</h3>
      <div className="contact_flex">
        <div className="contact_info">
          <h4>Contact Info</h4>
          <p>igortbelem@gmail.com</p>
        </div>
        <form className="contact_form" onSubmit={handleSubmit}>
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
            <button style={{ maxHeight: 38, position:'relative' }} type="submit">
              {isSending ? <Spinner /> : "Submit"}
            </button>
        </form>
      </div>
    </footer>
  );
};

export default Contact;

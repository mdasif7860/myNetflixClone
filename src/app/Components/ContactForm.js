'use client'
import styles from "@/app/contact/contact.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handleSubmit = () => {

  };
  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter Your Name
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Your Name"
            value={user.username}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Enter Your Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={user.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Enter Your Phone
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter Your Phone"
            value={user.phone}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            rows={5}
            value={user.message}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>
      <div>
        <button type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

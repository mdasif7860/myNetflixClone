import ContactCard from "../Components/ContactCard";
import ContactForm from "../Components/ContactForm";
import styles from "./contact.module.css";
const contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span>from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default contact;

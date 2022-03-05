import styles from "./contactForm.module.scss"

const ContactFormNetlify = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className={styles.form}>
      <input type="hidden" name="form-name" value="contact"/>
      <p>
        <label>
          <span>Your Name:</span>
          <input type="text" name="name" required/>
        </label>
      </p>
      <p>
        <label>
          <span>Your Email:</span>
          <input type="email" name="email" required/>
        </label>
      </p>
      <p>
        <label className="items-start">
          <span>Your Message to me:</span>
          <textarea name="message"/>
        </label>
      </p>
      <p>
        <button className="button" type="submit">Send</button>
      </p>
    </form>
  )
}

export default ContactFormNetlify

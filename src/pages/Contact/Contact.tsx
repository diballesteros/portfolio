import React from "react"
import "./Contact.scss"

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="contact__container page">
        <h2>Contact</h2>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message" />
        <button>Send</button>
      </div>
    </section>
  )
}

export default Contact

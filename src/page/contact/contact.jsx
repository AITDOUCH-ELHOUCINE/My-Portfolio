import React from 'react'
import './contact.css'
import { FaChevronUp } from "react-icons/fa";

function Contact() {
  return (
    <div>

      <main className="contact-section" id='contact'>
        <h2>Contact Me</h2>

        <form className="contact-form" method='POST' action='https://getform.io/f/bvrrwnkb'>
          <div className="input-group">
            <input type="text" placeholder="Name" name='name' />
            <input type="email" placeholder="Email" name='email' />
          </div>
          <textarea placeholder="Message" name='message'></textarea>
          <button type="submit" name='valide'>Send Me</button>
        </form>

        <div className="social-icons">
          <a href="https://github.com/AITDOUCH-ELHOUCINE" target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/elhoucine-ait-douch-b11270336/" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/elhoucineaitdouch/" target="_blank"><i className="fab fa-instagram"></i></a>
        </div>

        <button className="scroll-up"><a href="#head"><FaChevronUp /></a></button>
      </main>
    </div>
  )
}

export default Contact

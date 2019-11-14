import React from "react"
import ContactForm from "../contact/ContactForm"
import { FooterWrapper } from "./FooterStyles"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="inner">
        <section id="contact">
          <div className="contact-container">
            <h2 className="title-contact">Contact Paul</h2>

            <h3> get a free qoute to start the process</h3>
            <div className="contact-inner">
              <ContactForm />
            </div>
          </div>
        </section>
        <div className="footer-info">
          <p>
            copyright © {new Date().getFullYear()}, painter-paul.com
            {` `}
          </p>
          <p>
            Design {"&"} Developemet by{" "}
            <a href="https://www.oppenberger.com">MODesign</a>
          </p>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer

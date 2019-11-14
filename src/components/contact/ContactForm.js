import React, { useState } from "react"
import { navigate } from "gatsby-link"
import { ContactFormWrapper } from "./ContactFormStyles"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function ContactForm() {
  const [state, setState] = useState({})
  const [name, setName] = useState("...")

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const greeting = e => {
    const originalString = e.target.value
    const splitString = originalString.split(" ")
    const firstName = splitString[0]
    setName(firstName)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <>
      <ContactFormWrapper
        name="contact"
        method="POST"
        action="/success"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>
            Don’t fill this out if you're human:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>

        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onKeyUp={greeting}
            />
          </label>
        </p>
        <p>
          <label>
            Email: <input name="email" type="email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea name="message" onChange={handleChange}></textarea>
          </label>
        </p>

        <p>
          <button name="button" type="submit">
            Send
          </button>
        </p>
        <h5>
          {" "}
          Looking forward working with you, <span>{name}</span>
        </h5>
      </ContactFormWrapper>
    </>
  )
}

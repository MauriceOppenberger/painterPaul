import React from "react"
import { FooterWrapper } from "./FooterStyles"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="inner">
        <p>
          copyright © {new Date().getFullYear()}, painer paul
          {` `}
        </p>
        <p>
          Design {"&"} Developemet by{" "}
          <a href="https://www.oppenberger.com">Maurice</a>
        </p>
      </div>
    </FooterWrapper>
  )
}

export default Footer

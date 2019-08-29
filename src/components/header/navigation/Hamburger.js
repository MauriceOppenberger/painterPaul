import React from "react"
import PropTypes from "prop-types"
import { HamburgerButton } from "./HamburgerStyles"

import { MdToc } from "react-icons/md"

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton onClick={handleOverlayMenu} tabIndex="0">
    <MdToc size={32} alt="hamburger-menu" />
  </HamburgerButton>
)

Hamburger.propTypes = {
  handleOverlay: PropTypes.func,
}

export default Hamburger

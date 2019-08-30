/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./header/Header"
import Footer from "./footer/Footer"
import "./layout.css"
import Hamburger from "./header/navigation/Hamburger"
import NavigationModal from "./header/navigation/NavigationModal"

const Primary = styled.main`
  margin: 0 auto;
  /* max-width: 70vw; */
  padding: 100px 0px;
  height: 100%;
  position: relative;
  /* background: linear-gradient(to bottom, #e9e7e8, #e4e2e5); */
  /* background: linear-gradient(to bottom, #fff, #fff, #e3e3e5); */
  /* z-index: -1; */

  @media screen and (max-width: 992px) {
    /* max-width: 95vw; */
  }
`

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Primary className="" id="main">
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <NavigationModal menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <section id="main" className="site-main">
        {children}
      </section>
      <Footer />
    </Primary>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

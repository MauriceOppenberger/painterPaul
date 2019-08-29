import React from "react"

import PropTypes from "prop-types"
import SiteInfo from "./siteInfo/SiteInfo"
import Nav from "./navigation/Navigation"
import { HeaderWrapper } from "./HeaderStyles"

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="inner">
        <SiteInfo />
        <Nav />
      </div>
    </HeaderWrapper>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header

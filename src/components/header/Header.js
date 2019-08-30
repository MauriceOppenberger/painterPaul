import React from "react"

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

export default Header

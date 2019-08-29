import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { SiteInfoWrapper } from "./SiteInfoStyles"

const SiteInfo = () => {
  const {
    info: {
      edges: [{ node: info }],
    },
  } = useStaticQuery(graphql`
    query MetaQuery {
      info: allWordpressSiteMetadata {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  return (
    <div>
      <SiteInfoWrapper>
        <h1>
          <Link to="/">{info.name}</Link>
        </h1>
      </SiteInfoWrapper>
    </div>
  )
}

export default SiteInfo

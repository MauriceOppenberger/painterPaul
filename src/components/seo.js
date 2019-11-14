/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site, favicon } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            siteUrl
            image
          }
        }
        favicon: allWordpressWpFavicon {
          edges {
            node {
              url {
                source_url
              }
            }
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        titleTemplate={`${site.siteMetadata.title} - %s `}
        title={title}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            name: `keywords`,
            content: site.siteMetadata.keywords,
          },
          // {Facebook Card} //
          {
            property: `og:title`,
            content: site.siteMetadata.title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:url`,
            content: site.siteMetadata.siteUrl,
          },
          {
            property: `og:image`,
            content: site.siteMetadata.image,
          },
          {
            property: `og:image:width`,
            content: `400`,
          },
          {
            property: `og:image:height`,
            content: `300`,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: site.siteMetadata.title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
        link={[
          {
            rel: "shortcut icon",
            type: "image/png",
            href: `${
              favicon.edges[0].node.url
                ? favicon.edges[0].node.url.source_url
                : null
            }`,
          },
        ]}
      />
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

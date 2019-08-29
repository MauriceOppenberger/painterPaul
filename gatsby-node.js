const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "/",
    toPath: "/homepage",
    redirectInBrowser: true,
    IsPermanent: true,
  })

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            title
            slug
            content
            template
            status
            featured_media {
              localFile {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 500) {
                    src
                    srcSet
                    aspectRatio
                    sizes
                    base64
                  }
                }
              }
              title
            }
          }
        }
      }
    }
  `)

  //Check for errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  //Access query results via object destructuring
  const { allWordpressPage } = result.data

  //Create Page pages
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  // const galleryTemplate = path.resolve(`./src/templates/gallery.js`)

  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: edge.node,
    })
  })
}

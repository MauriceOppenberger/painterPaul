import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MenuWrapper } from "./NavigationStyles"

const navigation = () => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query MainMenuQuery {
      menu: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 2 } }
      ) {
        edges {
          node {
            items {
              title
              object_slug
              object_id
              url
            }
          }
        }
      }
    }
  `)

  console.log(menu)

  return (
    <MenuWrapper>
      <ul>
        {menu.items.map(item => (
          <li key={item.object_id}>
            <Link to={item.object_slug}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </MenuWrapper>
  )
}

export default navigation

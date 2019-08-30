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
              type
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
            <Link to={item.type !== "custom" ? item.object_slug : item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </MenuWrapper>
  )
}

export default navigation

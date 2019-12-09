import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MenuWrapper } from "./NavigationStyles"
import { FaFacebook } from "react-icons/fa"

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
              wordpress_children {
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
    }
  `)

  return (
    <MenuWrapper>
      <ul>
        {menu.items.map(item => (
          <li key={item.object_id}>
            {item.title === "Facebook" ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
            ) : (
              <Link to={item.type !== "custom" ? item.object_slug : item.url}>
                {item.title}
              </Link>
            )}
            <ul className="dropdown-content">
              {item.wordpress_children &&
                item.wordpress_children.map(subitem => (
                  <li key={subitem.object_id}>
                    <Link
                      to={
                        subitem.type !== "custom"
                          ? subitem.object_slug
                          : subitem.url
                      }
                    >
                      {subitem.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </MenuWrapper>
  )
}

export default navigation

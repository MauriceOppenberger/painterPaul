import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { Overlay } from "./NavigationModalStyles"
import { MdClose } from "react-icons/md"

import { FaFacebook } from "react-icons/fa"

const NavigationModal = ({ menuOpen, callback }) => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query OverlayMenuQuery {
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
                url
                object_slug
                object_id
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <MdClose size={60} alt="close_button" />
        </div>
        <ul className="overlayMenu">
          {menu.items.map(item => (
            <li key={item.object_id}>
              {item.title === "Facebook" ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={32} color="white" />
                </a>
              ) : (
                <Link
                  to={item.type !== "custom" ? item.object_slug : item.url}
                  activeClassName="overlayActive"
                >
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
      </div>
    </Overlay>
  )
}
NavigationModal.propTypes = {
  menuOpen: PropTypes.bool,
  callback: PropTypes.func,
}

export default NavigationModal

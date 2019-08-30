import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { Overlay } from "./NavigationModalStyles"
import { MdClose } from "react-icons/md"

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
            }
          }
        }
      }
    }
  `)
  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <ul className="overlayMenu">
          {menu.items.map((item, i) => (
            <li key={item.object_id}>
              <Link to={`/${item.object_slug}`} activeClassName="overlayActive">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <MdClose size={32} alt="close_button" />
        </div>
      </div>
    </Overlay>
  )
}
NavigationModal.propTypes = {
  menuOpen: PropTypes.bool,
  callback: PropTypes.func,
}

export default NavigationModal

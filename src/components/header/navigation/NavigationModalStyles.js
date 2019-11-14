import styled from "styled-components"

export const Overlay = styled.div`
  width: 100%;
  height: max-content;
  position: fixed;
  opacity: ${props => (props.menuOpen ? "1" : "0")};
  transform: ${props =>
    props.menuOpen ? "translateX(0%)" : "translateX(+100%)"};
  z-index: 9999;
  /* background: #fff; */
  left: 0px;
  top: 0px;
  padding: 0px;
  transition: all 0.4s ease;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100vh;
    color: #fff;
    padding: 40px;

    /* .SiteLogo {
      max-width: 400px;
      width: 200px;
      margin: 40px 0 60px 0;
    } */

    .overlayMenu {
      text-align: center;
      list-style-type: none;
      margin: 0;

      li {
        margin: 0 0 50px 0;
      }

      li.overlayActive {
        color: #d22e26;
      }

      a {
        font-size: 1.5rem;
        color: #fff;
        transition: all 0.3s ease;
        text-decoration: none;
        text-transform: uppercase;
        font-family: Raleway;

        font-weight: 700;
        line-height: 1.5;
        letter-spacing: 2px;

        :hover {
          color: #d22e26;
        }
      }
    }
  }

  .closeButton {
    /* position: absolute; */
    /* top: 50px;
    right: 50px; */
    color: #fff;
    width: max-content;
    height: max-content;
    cursor: pointer;
    /* transition: all 1s ease; */

    /* :hover {
      transform: rotate(180deg);
    } */
  }
  .closeButton svg {
    margin: auto 0 5vmax;
    transition: all 0.8s ease;

    :hover {
      color: #d22e26;
      transform: rotate(180deg);
    }
  }
  .dropdown-content {
    margin: 25px 0;
  }
  .dropdown-content li {
    list-style: none;
  }
  .dropdown-content li a {
    font-size: 1.2rem !important;
  }
`

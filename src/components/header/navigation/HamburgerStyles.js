import styled from "styled-components"

export const HamburgerButton = styled.div`
  position: fixed;
  display: block;

  right: 30px;
  top: 2.5vmax;
  z-index: 1001;

  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    transform: scale(1.2);
  }

  @media (min-width: 992px) {
    display: none;
  }
`

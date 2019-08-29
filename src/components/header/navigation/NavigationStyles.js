import styled from "styled-components"

export const MenuWrapper = styled.nav`
  width: max-content;
  text-transform: uppercase;
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  display: none;

  @media (min-width: 992px) {
    font-size: 0.85rem;
    display: block;
  }
  ul {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin: auto;
  }
  ul li {
    list-style: none;
    margin: 0 10px;
  }
  ul li a {
    color: var(--mainDark);
    text-decoration: none;
    display: block;
  }
`

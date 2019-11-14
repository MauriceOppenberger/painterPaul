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
    margin: 0 15px;
    font-weight: 700;
    transition: all 0.3s;
  }
  ul li:hover {
    transform: scale(1.1);
  }
  ul li a {
    color: var(--mainDark);
    text-decoration: none;
    display: block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
  }
  .dropdown-content li {
    font-weight: 600;
    font-size: 0.8rem;
  }
  ul li:hover .dropdown-content {
    display: block;
    transition: all 0.3s;
    transition-delay: 0.2s;
  }
`

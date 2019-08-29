import styled from "styled-components"

export const FooterWrapper = styled.footer`
  padding: 1.45rem 0;
  max-height: 100px;

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  .inner {
    display: flex;
    max-width: 70vmax;

    margin: auto;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    flex-wrap: wrap;
  }
  .inner p {
    margin: 0;
    font-size: smaller;
    flex: 1 1 300px;
  }
  .inner p:nth-child(2) {
    text-align: right;
  }
  .inner p a {
    text-decoration: none;
    color: var(--mainDark);
    text-transform: lowercase;
    font-weight: 600;
  }
  @media screen and (max-width: 860px) {
    .inner p {
      text-align: center !important;
    }
  }
`

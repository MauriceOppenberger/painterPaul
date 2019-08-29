import styled from "styled-components"

export const HeaderWrapper = styled.header`
  /* margin-bottom: 1.45rem; */
  padding: 1.45rem 0;
  height: 100px;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  @media screen and (min-width: 992px) {
    .inner {
      max-width: 70vw;
    }
  }
  .inner {
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
  }
  .inner h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`

import styled from "styled-components"

export const HeaderWrapper = styled.header`
  /* margin-bottom: 1.45rem; */
  padding: 1.45rem 0;
  height: 100px;
  /* background: linear-gradient(
    to right,
    #e6e4e7,
    #e7e5e8,
    #e6e6e8,
    #e8e6e7,
    #e6e6e8,
    #eaeaea,
    #edebec
  ); */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media screen and (min-width: 992px) {
    .inner {
      max-width: 70vw;
    }
  }
  .inner {
    display: flex;
    width: 95%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
  }
`

import styled from "styled-components"

export const FooterWrapper = styled.footer`
  padding: 0;

  display: flex;

  width: 100%;
  margin-top: 2rem;

  .inner {
    display: flex;

    max-width: 70vw;
    width: 100%;

    margin: auto;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    flex-wrap: wrap;
  }
  .footer-info p {
    margin: 0;
    font-size: smaller;
    flex: 1 1 250px;
    font-weight: 600;
  }
  .footer-info p:nth-child(2) {
    text-align: right;
  }
  .footer-info p a {
    text-decoration: none;
    color: var(--mainDark);
    text-transform: lowercase;
  }
  .footer-info {
    display: flex;
    width: 100%;
    margin: 10px;
    flex-wrap: wrap;
  }
  #contact {
    display: flex;
    margin: auto;
    width: 100%;
  }
  .contact-container {
    width: 550px;
    margin: auto;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .flex-container .title-contact {
    flex: 1 100%;
    font-size: 2.5rem;
    text-align: center;
  }
  .flex-box {
    flex: 1 100%;
    text-align: center;
    margin: 10px auto;
  }

  @media screen and (max-width: 992px) {
    .footer-info p {
      text-align: center !important;
    }
    .inner {
      max-width: 90vw;
    }
    .flex-container .title-contact {
      text-align: left;
    }
    .flex-box {
      text-align: left;
      margin: 10px auto;
    }
  }
`

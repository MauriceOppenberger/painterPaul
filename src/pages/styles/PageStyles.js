import styled from "styled-components"

export const PageWrapper = styled.div`
  background: #fff;

  section {
    padding: 4rem 0 1rem;
  }
  .container {
    text-align: center;
    max-width: 80vw;
    margin: auto;
    height: 90vh;
  }
  .container .title {
    font-size: 5vmax;

    margin: 0 auto 3rem;
    font-weight: 800;
  }

  .cta-btn {
    line-height: 2;
    margin: 1rem 0;
    background-color: #96c50b;
    padding: 0.5rem 3rem;
    border-radius: 500px;
    color: var(--mainWhite);
    font-weight: 600;
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
    border: none;
  }
  .cta-btn:hover {
    box-shadow: var(--darkShadow);
  }
  .btn-link {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 800;
  }
`

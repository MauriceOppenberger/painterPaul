import styled from "styled-components"

export const ContactFormWrapper = styled.form`
  h3 span {
    text-transform: capitalize;
  }
  p {
    margin: 1.75rem 0;
    width: 100%;
  }
  p:nth-last-child(1) {
    width: 100%;
    display: flex;
  }

  label {
    font-weight: 600;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #001c3f;
    border-radius: 5px;
    box-shadow: var(--lightShadow);
    background-color: #eeeeee55;
  }
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #001c3f;
    height: 15vmax;
    border-radius: 5px;
    box-shadow: var(--lightShadow);
    background-color: #eeeeee55;
  }
  button {
    /* width: max-content;
    padding: 8px 25px;
    display: flex;
    margin: 1.45rem 0 0 auto;
    background-color: transparent;
    border: 1px solid #001c3f;
    border-radius: 5px;
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition); */
    line-height: 2;
    margin: 1rem auto;
    background-color: #eeeeee55;

    padding: 0.5rem 3rem;
    border-radius: 500px;
    /* color: var(--mainWhite); */
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
    font-weight: 600;
    width: 70%;
    border: none;
  }
  button:hover {
    background-color: #96c50b;
    color: #fff;
    box-shadow: var(--darkShadow);
  }
  .hidden {
    display: none;
  }
  /* @media screen and (min-width: 992px) {
    p:nth-child(n + 3):nth-child(-n + 4) {
      width: 80%;
    }
  } */
`

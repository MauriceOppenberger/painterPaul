import styled from "styled-components"

export const ContactFormWrapper = styled.form`
  max-width: 550px;
  margin: auto;

  h5 {
    text-align: center;
    font-size: 1rem;
  }
  h5 span {
    text-transform: capitalize;
  }
  p {
    margin: 1.75rem 0;
    width: 100%;
  }
  p:nth-last-child(2) {
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
    line-height: 2;
    margin: 1rem auto;
    background-color: green;

    padding: 0.5rem 3rem;
    border-radius: 500px;
    color: var(--mainWhite);
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
    font-weight: 600;
    width: 60%;
    border: none;
  }
  button:hover {
    background-color: green;

    box-shadow: var(--darkShadow);
  }
  .hidden {
    display: none;
  }
`

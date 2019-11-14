import styled from "styled-components"

export const PageWrapper = styled.div`
  .wp-content {
    height: auto;
    z-index: 999;
  }
  h2 {
    font-size: 2.25rem;
  }
  .center {
    height: 100%;
    max-width: 100%;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
  }
  .content {
    display: flex;
    flex: 1 1 100%;
    flex-wrap: wrap;
  }
  .content div {
    width: 100%;
  }

  .bg-image-landing {
    position: absolute !important;

    width: 100%;

    margin-top: -100px;

    max-height: 750px;

    height: 700px;
    min-height: 35vw;
    z-index: -1;
  }

  /* Home Page  */

  section {
    z-index: 999;
  }

  #hero {
    max-height: 650px;

    height: 600px;
    min-height: 35vw;
  }
  @media screen and(max-width: 667px) {
    padding: 0px;
  }

  article {
    height: 100%;
    padding: 0 15px;
    z-index: 999;
  }

  @media screen and (min-width: 992px) {
    .content article {
      max-width: 70%;
      margin: auto;
    }
  }

  .landing {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    z-index: 999;
  }

  .landing .title-landing {
    flex: 1 1 100%;
    font-size: 5vmax;
    font-weight: 800;
    max-width: 70vmax;
    line-height: 1.6;
    margin: auto 0;

    /* margin: 0 auto 3rem; */
  }
  .landing .sub-title {
    flex: 1 1 100%;
    font-size: 2.5vmax;
    font-weight: 800;
    margin-bottom: auto;
    /* margin: auto; */
    /* margin: 0 auto 3rem; */
  }
  .cta-btn {
    flex: 1 1 100%;
    line-height: 2;
    margin: 1rem 0;
    background-color: green;
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
    flex: 1 1 100%;
    margin: auto;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 800;
  }
  .landing .info {
    flex: 1 1 100%;
    margin-top: auto;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: small;
    max-width: 80vw;
    height: max-content;
  }

  /* SERVICES SECTION */

  #services {
    background: linear-gradient(to bottom, #fff, #fff, #fafafb);
    padding-bottom: 2rem;
    margin-top: 3rem;
  }

  .services {
    text-align: center;
  }
  .services .title-services {
    font-size: 4vmax;
  }

  .services-items {
    display: flex;
    flex-wrap: wrap;
    margin: 40px auto;
  }

  .services-items div {
    flex: 1 1 250px;
    padding: 15px;
    margin: 0.5rem;

    height: max-content;
  }
  .services-items .bg-image {
    width: auto;
    height: 15vmin;
    max-height: 250px;
    background: red;
    display: flex;
    margin-bottom: 1rem;
  }
  .services-items .interior .bg-image {
    background: url(${props => props.interior});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .services-items .exterior .bg-image {
    background: url(${props => props.exterior});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .services-items .more .bg-image {
    background: url(${props => props.additional});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .services-items .details p {
    font-weight: 500;
  }

  @media screen and (max-width: 992px) {
    .contact-container {
      width: 90vw;
    }
    .services-items {
      max-width: 600px;
      margin: 4rem auto;
    }
    .service-blurb {
      max-width: 100% !important;
    }
    .blurb {
      max-width: 100% !important;
    }
    .title {
      margin: 0;
    }
  }

  /* Gallery Page  */
  .title {
    display: flex;
    width: 70vw;
    padding: 0 15px;
    margin: 2rem auto 0;
    font-size: 5vmax;
    line-height: 1.6;
  }

  .image-gallery ul {
    display: flex;
    flex-wrap: wrap;
    padding: 3rem 5vw;
    margin: 3rem auto 0;

    background: linear-gradient(to bottom, #fff, #fff, #fff, #f7f7f7);
  }
  .image-gallery ul li {
    flex: 1 1 25vw;
    margin: 1rem;
    text-decoration: none;
    display: flex;

    justify-content: center;
  }
  .image-gallery ul li figure img,
  picture {
    width: 30vw;
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
    background-color: green;
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

  .title-success,
  .title-nf {
    display: block;
    max-width: 70vw;
    margin: 4rem auto 1rem;
    font-size: 5vmax;
    line-height: 1.6;
  }
  .service-blurb {
    max-width: 70vw;
    padding: 0 15px;
    margin: auto;
  }
  .blurb {
    line-height: 2;
    max-width: 50vw;
    word-spacing: 3px;
    margin: 30px 0;
    font-size: 1rem;
    font-weight: 600;
  }
`

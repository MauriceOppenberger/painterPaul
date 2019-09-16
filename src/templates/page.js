import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from "../components/contact/ContactForm"
import { PageWrapper } from "./styles/Page"
import BackgroundImage from "gatsby-background-image"

const page = ({ pageContext, data }) => {
  const homepage = data.wordpressPage

  const exteriorIcon = homepage.acf.exterioricon.localFile.url
  const interiorIcon = homepage.acf.interioricon.localFile.url
  const additionalIcon = homepage.acf.additionalicon.localFile.url

  console.log(pageContext.status)
  return (
    <>
      <SEO
        title={pageContext.title}
        description={pageContext.acf.description}
      />
      <Layout>
        <PageWrapper
          exterior={exteriorIcon}
          interior={interiorIcon}
          additional={additionalIcon}
        >
          <BackgroundImage
            Tag={"landing"}
            className="bg-image-landing"
            fluid={
              homepage.acf.landingbackground.localFile.childImageSharp.fluid
            }
          />
          <div className="center">
            <div className="content">
              <div
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: pageContext.content }}
              />
              <div>
                <section id="contact">
                  <article>
                    <div class="contact">
                      <h2 class="title-contact">Write Paul.</h2>
                      <br />
                      <h3> or call to discuss your project</h3>
                      <div className="contact-container">
                        <ContactForm />
                      </div>
                    </div>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </PageWrapper>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query HomePageQuery {
    wordpressPage(title: { eq: "Homepage" }) {
      acf {
        landingbackground {
          localFile {
            url
            childImageSharp {
              fluid(quality: 100, maxWidth: 4000) {
                ...GatsbyImageSharpFluid_withWebp
                src
              }
            }
          }
        }
      }
      acf {
        contactbackground {
          localFile {
            url
            childImageSharp {
              fluid(quality: 100, maxWidth: 1800) {
                ...GatsbyImageSharpFluid_withWebp
                src
              }
            }
          }
        }
      }
      acf {
        exterioricon {
          localFile {
            url
          }
        }
      }
      acf {
        interioricon {
          localFile {
            url
          }
        }
      }
      acf {
        additionalicon {
          localFile {
            url
          }
        }
      }
    }
  }
`

export default page

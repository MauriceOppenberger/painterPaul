import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
            <h2 className="title">
              {pageContext.title !== "Homepage" ? pageContext.title : null}
            </h2>
            <div className="content">
              <div
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: pageContext.content }}
              />

              {/* <div>
                <section id="contact">
                  <article>
                    <div class="contact">
                      <h2 class="title-contact">Contact Paul</h2>
                      <br />
                      <h3> to get free qoute on your project</h3>
                      <div className="contact-container">
                        <ContactForm />
                      </div>
                    </div>
                  </article>
                </section>
              </div> */}
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
              fluid(quality: 100, maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        contactbackground {
          localFile {
            url
            childImageSharp {
              fluid(quality: 100, maxWidth: 1800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        exterioricon {
          localFile {
            url
          }
        }
        interioricon {
          localFile {
            url
          }
        }
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

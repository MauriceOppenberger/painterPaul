import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from "../components/contact/ContactForm"
import { PageWrapper } from "./styles/Page"

const page = ({ pageContext, data }) => {
  const homepage = data.wordpressPage

  const landingBackground = homepage.acf.landingbackground.localFile.url
  const contactBackground = homepage.acf.contactbackground.localFile.url
  const exteriorIcon = homepage.acf.exterioricon.localFile.url
  const interiorIcon = homepage.acf.interioricon.localFile.url
  const additionalIcon = homepage.acf.additionalicon.localFile.url
  return (
    <>
      <SEO title={pageContext.title} />
      <Layout>
        <PageWrapper
          landing={landingBackground}
          contact={contactBackground}
          exterior={exteriorIcon}
          interior={interiorIcon}
          additional={additionalIcon}
        >
          <div className="center">
            <div className="content">
              <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
              <div>
                <section id="contact">
                  <article>
                    <div class="contact">
                      <h2 class="title">
                        call or write us to get a Free Quote.
                      </h2>
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
              fluid(quality: 100, maxWidth: 1800) {
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

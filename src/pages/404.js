import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { PageWrapper } from "../templates/styles/Page"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Not found"
      description="this is a 404 page. The site you are trying to visit does not exits or uses a different link"
    />
    <PageWrapper>
      <section className="container" style={{ background: "#fff" }}>
        <h1 className="title-nf">NOT FOUND</h1>
        <h3>uppps...! try it again</h3>
        <Link className="btn-link" to="/">
          <button className="cta-btn">Back to Homepage</button>
        </Link>
      </section>
    </PageWrapper>
  </Layout>
)

export default NotFoundPage

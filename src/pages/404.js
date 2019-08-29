import React from "react"

import Layout from "../components/Layout"

import SEO from "../components/SEO"
import { PageWrapper } from "../templates/styles/Page"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageWrapper>
      <section className="container" style={{ background: "#fff" }}>
        <h1 className="title">NOT FOUND</h1>
        <h3>uppps...! try it again</h3>
        <Link className="btn-link" to="/">
          <button className="cta-btn">Back to Homepage</button>
        </Link>
      </section>
    </PageWrapper>
  </Layout>
)

export default NotFoundPage

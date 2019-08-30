import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import { PageWrapper } from "../templates/styles/Page"

const Success = () => (
  <Layout>
    <SEO title="Success" description="This is the submission page. You have successful submitted the contact form. " />
    <PageWrapper>
      <section className="container" style={{ background: "#fff" }}>
        <h1 className="title">Thanks for Submitting</h1>
        <h3>I will be in touch shortly</h3>
        <Link className="btn-link" to="/">
          <button className="cta-btn">Back to Homepage</button>
        </Link>
      </section>
    </PageWrapper>
  </Layout>
)

export default Success

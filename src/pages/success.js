import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

import SEO from "../components/SEO"

import { PageWrapperStyles } from "./styles/PageStyles"

const Success = () => (
  <Layout>
    <SEO title="submission-page" />
    <PageWrapperStyles>
      <section className="container">
        <h1 className="title">Thanks for Submitting</h1>
        <h3>I will be in touch shortly</h3>
        <Link className="btn-link" to="/">
          <button className="cta-btn">Back to Homepage</button>
        </Link>
      </section>
    </PageWrapperStyles>
  </Layout>
)

export default Success

import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const OscarsPageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="OscarsPage">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

// Export Default OscarsPage for front-end
const OscarsPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <OscarsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default OscarsPage

export const pageQuery = graphql`
  ## Query for OscarsPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query OscarsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`

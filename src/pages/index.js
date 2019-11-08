import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"
import ContentReverse from "../components/content-reverse"

const IndexPage = () => (
  <Layout>
    <Content />
    <ContentReverse />
  </Layout>
)

export default IndexPage

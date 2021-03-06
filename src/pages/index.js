import React from "react"

import Layout from "../components/layout"
import ContentReverse from "../components/content-reverse"
import ContentCenter from "../components/content-center"
import ContentTypography from "../components/content-typography"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO/>
    <ContentCenter />
    <ContentReverse />
    <ContentTypography />
  </Layout>
)

export default IndexPage

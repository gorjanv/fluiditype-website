import React from "react"

import Layout from "../components/layout"
import Content from "../components/content"
import ContentReverse from "../components/content-reverse"
import ContentCenter from "../components/content-center"
import ContentTypography from "../components/content-typography"

const IndexPage = () => (
  <Layout>
    <ContentCenter />
    <ContentReverse />
    <ContentTypography />
  </Layout>
)

export default IndexPage

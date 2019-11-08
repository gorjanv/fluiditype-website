import React from "react"

import Layout from "../components/layout"
import Content from "../components/content"
import ContentReverse from "../components/content-reverse"

const IndexPage = () => (
  <Layout>
    <Content />
    <ContentReverse />
    <Content />
    <ContentReverse />
    <Content />
    <ContentReverse />
  </Layout>
)

export default IndexPage

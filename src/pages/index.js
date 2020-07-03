import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Banner from "../components/banner"
import NewsPreview from "../components/newspreview"

const IndexPage = () => (
  <Layout isFilled={false}>
    <SEO title="Home" />
    
    <Banner />
    
    <NewsPreview />
    
  </Layout>
)

export default IndexPage

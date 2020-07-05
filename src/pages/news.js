import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import NewsItems from "../components/newsitems"

const NewsPage = () => (
  <Layout isfilled={true}>
    <SEO title="News" />
    
    <Title text="NEWS" />

    <NewsItems/>
    
  </Layout>
)

export default NewsPage
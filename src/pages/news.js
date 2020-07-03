import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import NewsItems from "../components/newsitems"

const NewsPage = () => (
  <Layout isFilled={true}>
    <SEO title="News" />
    
    <Title text="NEWS" />

    <NewsItems/>
    
  </Layout>
)

export default NewsPage
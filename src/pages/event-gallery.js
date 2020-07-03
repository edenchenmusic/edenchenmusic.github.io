import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import Gallery from "../components/gallery"

const SubText = styled.p`
  font-family: "Montserrat Light Italic";
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  @media (min-width: ${theme.tablet}) {
    display: none;
  }
`
const EventGalleryPage = () => (
  <Layout isFilled={true}>
    <SEO title="Event Gallery" />
    
    <Title text="EVENT GALLERY" />
    <SubText>Click image to view caption.</SubText>
    <Gallery />
    
  </Layout>
)

export default EventGalleryPage

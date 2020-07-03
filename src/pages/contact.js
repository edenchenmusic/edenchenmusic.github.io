import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Email, Instagram, Youtube, Facebook} from "../components/footer"

const ImageContainer = styled.div`
  width: 100%;
  @media (min-width: ${theme.mobile}) {
    padding-right: 1rem;
    width: 40%;
    overflow: hidden;
  }
`
const TextContainer = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  position: relative;
  @media (min-width: ${theme.mobile}) {
    width: 55%;
    float: left;
    padding: 2rem 0rem 0rem 6rem;
  }
`
const StyledLink = styled.a`
    display: flex;
    align-items: center;
    
    @media (min-width: ${theme.mobile}) {
        justify-content: none;
    }
`
// few styling differences to title.js
const ContactTitle = styled.div`
    font-size: 3.5rem;
    display: flex;
    align-items: center;
    padding: 2rem 0rem 4rem 0rem;
    &::before {
      content: "";
      flex: 0.3;
      background: linear-gradient(to left, ${theme.teal}, transparent);
      height: 0.1rem;
      margin-right: .2rem
    }
    &::after {
      content: "";
      flex: 1;
      background: linear-gradient(to right, ${theme.teal}, transparent);
      height: 0.1rem;
      margin-left: .2rem;
    }
    @media (max-width: ${theme.tablet}) {
      font-size: 3rem;
    }
    @media (max-width: ${theme.mobile}) {
      &::before {
          flex: 1;
      }
    }
`
const ContactPage = ({ data }) => (
  <Layout isFilled={true}>
    <SEO title="Contact" />

    
    <TextContainer>
            <ContactTitle>CONTACT</ContactTitle>
            <p>Eden is currently based in New York City.</p>
            <p> 
                <StyledLink href="mailto:echenmusic@gmail.com"><Email /> echenmusic@gmail.com  </StyledLink> 
            </p> 
            <p> 
                <StyledLink href="https://www.instagram.com/edenchenmusic/"><Instagram /> edenchenmusic</StyledLink>
            </p>
            <p>
                <StyledLink href="https://www.youtube.com/channel/UCPVH3SGoNxpShR5ZjbVc4SQ"><Youtube /> Eden Chen</StyledLink>
            </p>
            <p>
                <StyledLink href="https://www.facebook.com/edenchenmusic"><Facebook />Eden Chen - Pianist</StyledLink>
            </p>
    </TextContainer>
    <ImageContainer>
        <Img fluid={data.contactImg.childImageSharp.fluid} alt="about" />
    </ImageContainer>
    

  </Layout>
)

export const data = graphql` {
    contactImg: file(relativePath: { eq: "photos/photo5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`

export default ContactPage
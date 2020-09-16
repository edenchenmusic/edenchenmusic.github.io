import React from "react"
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;

  @media (min-width: ${theme.mobile}) {
    flex-direction: row;
    padding: 0rem 6rem;
  }
`
const ImageContainer = styled.div`
  padding-bottom: 1rem;
  @media (min-width: ${theme.mobile}) {
    padding-right: 2rem;
    width: 50%;
    float: left;
  }
  
`

const TextContainer = styled.div`

`

const bio = [
  "Eden Chen, 21, is a Lang Lang International Music Foundation Young Scholar Alum, a Jack Kent Cooke Young Artist, and a rising senior at The Juilliard School. He recently received the Gina Bachauer Grant, and was featured online by Isabel Leonard, as well as Pianist Magazine. Eden previously studied political science at Columbia University, participating in its Exchange with The Juilliard School.​"
  ,
  "Eden has performed at Helen Yarmak International for New York Fashion Week. He has recorded with Lang Lang for the Disney film, \"The Nutcracker and the Four Realms\" and Deutsche Grammaphon. Eden has appeared alongside Lang Lang at JBLFest, The City of Shenzhen’s Exposition in New York, and the Swiss Alps Classics series in Andermatt. He performed at the Grammy’s Salute to Classical Concert, playing arrangements of Leonard Bernstein’s music and accompanying distinguished artists such as Ledisi and Kiana Lede, in Carnegie Hall’s Stern Auditorium."
  ,
  "Eden has given recitals at the Howard Assembly Rooms in Leeds, and Wigmore Hall in London. He has given five performances at Weill Recital Hall at Carnegie Hall in the past few years, as well as two performances at Pritzker Pavilion in Millennium Park. He has also performed two benefit concerts in Zhongshan, China, at the Zhongshan Culture and Art Center, as well as one for the New York Presbyterian Morgan Stanley Children’s Hospital. Eden has shared music with thousands of schoolchildren in school visits and performances in the US and UK, including one for an audience of 1,200 in the Leeds Town Hall."
  ,
  "​Eden is currently studying with Hung-Kuan Chen. He previously studied with Jerome Lowenthal, Rufus Choi, Ory Shihor, and Elena Makarova. Eden studied two years at the Colburn Academy. He has been mentored by Lang Lang, Daniel Pollack, Seymour Bernstein, Jean-Yves Thibaudet, Alan Chow, Christopher O’Riley, John Perry, and Gary Graffman. Eden has attended the Mozarteum Summer Academy in Salzburg, the Paderewski Piano Academy, the Colburn Academy Piano Festival, the John Perry Academy of Music Summer Festival, the Académie Internationale d’Eté de Nice, and was invited to the First Leeds International Piano Festival, organized by the Leeds International Piano Competition, as well as Music Fest Perugia."
  ,
  "Eden’s musical experience outside of classical piano includes prepared piano and harpsichord, which he has played with the Colburn Academy Virtuosi Orchestra. "
]

const AboutPage = ({ data }) => {
  
  const text = bio.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));
  
  return (
    <Layout isfilled={true}>
      <SEO title="About" />
      <Title text="BIOGRAPHY" />

      <Container>
        <TextContainer>
          <ImageContainer>
            <Img fluid={data.aboutImg.childImageSharp.fluid} alt="about" />
          </ImageContainer>
          {text}
        </TextContainer>
      </Container>

    </Layout>
  )

  }

export const data = graphql` {
  aboutImg: file(relativePath: { eq: "photos/photo9.png" }) {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

export default AboutPage

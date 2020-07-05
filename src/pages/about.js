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
  "Eden Chen, 21, is a Lang Lang International Music Foundation Young Scholar, a Jack Kent Cooke Young Artist, and a junior at The Juilliard School. He has recorded with Lang Lang for the upcoming Disney film, \"The Nutcracker and the Four Realms\" and Deustche Grammaphone. Eden has appeared alongside Lang Lang at JBLFest, The City of Shenzhen’s Exposition in New York, and the Swiss Alps Classics series in Andermatt. He recently performed at the Grammy’s Salute to Classical Concert, playing arrangements of Leonard Bernstein’s music and accompanying distinguished artists such as Ledisi and Kiana Lede, in Carnegie Hall’s Stern Auditorium. Eden previously studied at Columbia University, participating in its Exchange with The Juilliard School.​"
  ,
  "Recently, Eden gave recitals at the Howard Assembly Rooms in Leeds, and Wigmore Hall in London. He has given five performances at Weill Recital Hall at Carnegie Hall in the past few years, as well as two performances at Pritzker Pavilion in Millennium Park. He has also performed two benefit concerts in Zhongshan, China, at the Zhongshan Culture and Art Center, as well as one for the New York Presbyterian Morgan Stanley Children’s Hospital. Eden has shared music with thousands of schoolchildren in school visits and performances in the US and UK, including one for an audience of 1,200 in the Leeds Town Hall."
  ,
  "Eden has been featured on NPR’s From the Top radio show, and is a recipient of the McGaughey Platinum Prize in the Glendale Piano Competition, as well as a two-time recipient of the David Weiss Scholarship of the Young Musicians Foundation, among other awards he has won since age 7. He gave his debut solo concert at the American Jewish University at the age of 11, and made his concerto debut at the age of 11 with the Southwestern Music Festival Orchestra after he won First Prize in the Young Pianist Category at the SYMF. He has also performed with orchestras including the Midwest Young Artists, the MostArts Festival Orchestra, the Diamond Bar High School Symphony Orchestra, and the Antelope Valley Symphony Orchestra."
  ,
  "​Eden is currently studying with Hung-Kuan Chen. He previously studied with Jerome Lowenthal, Rufus Choi, Ory Shihor, and Elena Makarova. Eden studied two years at the Colburn Academy. He has been mentored by Lang Lang, Daniel Pollack, Seymour Bernstein, Jean-Yves Thibaudet, Alan Chow, Christopher O’Riley, John Perry, and Gary Graffman. Eden has attended the Colburn Academy Piano Festival, the John Perry Academy of Music Summer Festival, the Académie Internationale d’Eté de Nice, and was invited to the First Leeds International Piano Festival, organized by the Leeds International Piano Competition, as well as Music Fest Perugia."
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

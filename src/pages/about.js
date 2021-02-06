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
  "Eden Chen, 21, is a Young Scholar Alum of the Lang Lang International Music Foundation, a Jack Kent Cooke Young Artist. He is a fourth-year undergraduate at The Juilliard School, where he is studying with support from the Gina Bachauer Grant.  Eden previously studied political science at Columbia University, participating in its Exchange with The Juilliard School.​​"
  ,
  "In the 2019-2020 season, Eden gave a multimedia recital at The Juilliard School, featuring John Milton’s poem, Paradise Lost, and the visual art of Spanish artist Pablo Auladell. He was also invited to perform at Helen Yarmak International for New York Fashion Week. He was featured online by Grammy Award-winning soprano Isabel Leonard and Pianist Magazine. His other virtual performances include an adaptation of Aaron Copland’s Appalachian Spring with the Juilliard Green Club and the inaugural “Play it Forward” virtual concert presented by the Lang Lang Foundation. During this time, Eden received the Gluck Community Service Fellowship for designing virtual performances for senior homes most affected by the COVID-19 pandemic. His upcoming project focuses on the pandemic through a combination of Virginia Woolf’s novel, To the Lighthouse, the paintings of Giorgio di Chirico, and a program by Leoš Janáček and Matthias Pintchser."
  ,
  "Eden’s distinguished collaborations include recording with Lang Lang for the Disney film, \"The Nutcracker and the Four Realms\" and Deutsche Grammaphon. He has appeared alongside Lang Lang at JBLFest, The City of Shenzhen’s Exposition in New York, and the Swiss Alps Classics series in Andermatt. He has also performed at the Grammy’s Salute to Classical Concert, playing arrangements of Leonard Bernstein’s music with distinguished artists such as Ledisi and Kiana Lede in Carnegie Hall’s Stern Auditorium."
  ,
  "​Eden’s solo performances have taken him to Italy, Austria, Poland, England, and China. Highlights of these include recitals at Wigmore Hall in London and the Howard Assembly Rooms in Leeds as guest artist of the Leeds Piano Festival, organized by the Leeds International Piano Competition. He has given five performances in Weill Recital Hall at Carnegie Hall, as well as two performances in Pritzker Pavilion at Millennium Park. He has also performed two benefit concerts in Zhongshan, China, at the Zhongshan Culture and Art Center, as well as one for the New York Presbyterian Morgan Stanley Children’s Hospital. Eden has shared music with thousands of schoolchildren in school visits and performances in the US and UK, including one for an audience of 1,200 in the Leeds Town Hall. As a concerto soloist, Eden has performed with the Torun Symphony in Poland, the Midwest Young Artists Symphony in Chicago, and the Antelope Valley Symphony in California."
  ,
  "Eden was a recipient of the New Horizons Fellowship, a full scholarship to the Aspen Music Festival and School. He has also attended and performed at festivals such as the Mozarteum Summer Academy in Salzburg, the Paderewski Piano Academy, the Colburn Academy Piano Festival, the John Perry Academy of Music Summer Festival, the Académie Internationale d’Eté de Nice, as well as Music Fest Perugia."
  ,
  "​Eden is currently studying with Hung-Kuan Chen. He began his studies with Elena Makarova and has previously studied with Jerome Lowenthal, Rufus Choi, and Ory Shihor. Eden studied two years at the Colburn Academy. He has been mentored by Lang Lang, Daniel Pollack, Seymour Bernstein, Jean-Yves Thibaudet, Alan Chow, Christopher O’Riley, John Perry, Ilana Vered and Gary Graffman. "
  ,
  "Eden’s musical experience outside of classical piano includes prepared piano and harpsichord, which he has played with the Colburn Academy Virtuosi Orchestra."
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

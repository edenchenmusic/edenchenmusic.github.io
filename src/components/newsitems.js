import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0rem 2rem;
    @media (max-width: ${theme.mobile}) {
        flex-direction: column;
    }
    
`
const ReverseItemContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0rem 2rem;
    @media (max-width: ${theme.mobile}) {
        flex-direction: column;
    }
`
const MediaContainer = styled.div`
    width: 50%;
    padding: 1.5rem 1.5rem;  
    @media (max-width: ${theme.mobile}) {
        width: 100%;
        padding: 1.5rem 0.25rem;  
    }
`
const VerticalMediaContainer = styled.div`
    width: 50%;
    padding: 1.5rem 5rem;
    @media (max-width: ${theme.mobile}) {
        width: 100%;
        padding: 1.5rem 1rem; 
    }
`
const TextContainer = styled.div`
    width: 50%;
    padding: 1.5rem 1.5rem;
    @media (max-width: ${theme.mobile}) {
        width: 100%;
        padding: 1.5rem 0.25rem; 
    }
    
`
const Video = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; 
    height: 0;
    iframe{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

// text data. Description can not have links.
export const newstext = [
    {
        title: "Eden Chen is featured on Pianist Magazine’s 5 online", 
        date: "May 18, 2020",
        description: "Eden Chen is featured on Pianist Magazine’s 5 Online for his performances of Scarlatti and Liszt, and a duo performance of Gershwin’s “Summertime”. This performance with pianist and singer Chelsea Guo was part of the Lang Lang International Music Foundation’s Virtual Recital Series.",
        links:
            <p>
                The performance is available 
                <a href="https://www.instagram.com/tv/CANqJNSH4W4/?utm_source=ig_web_copy_link"> <u>here</u></a>.
                The article is available
                <a href="https://www.pianistmagazine.com/news/5-brilliant-online-performances-to-enjoy-from-the-last-week/"> <u>here</u></a>.
            </p>,
        
    },
    {
        title: "Eden Chen performs at Juilliard",
        date: "October 13, 2019",
        description:"Eden Chen performs at Juilliard’s Paul Hall. The program includes works by Chopin, Rachmaninoff, and Frank Martin. The second half features a multimedia performance of Liszt’s Sonata in b minor inspired by John Milton’s Paradise Lost, with visual art done by Paulo Auladell.",
        links:
             <p>
                This full project is available
                <a href="https://youtu.be/TJo_peIZV-8"> <u>here</u></a>.
                The Martin Preludes are available
                <a href="https://youtu.be/tQk2TXnuJg0"> <u>here</u></a>.
            </p>,
    },
    {
        title: "Eden Chen performs at Helen Yarmak International for New York Fashion Week",
        date: "September 12, 2019",
        description:  "Eden Chen performs at award-winning furrier Helen Yarmak’s headquarters as part of her fashion house’s participation in New York Fashion Week. The program includes works by Rachmaninoff, Bolcom, and Debussy.",
        links:
            <p>
                The performance is available
                <a href="https://www.instagram.com/p/B2VhjhkhuvT/?igshid=9rqf9aqdj9t2"> <u>here</u></a>.
            </p>,
    },
    {
        title: "Eden Chen performs at Lang Lang International Music Foundation’s 10th Anniversary Gala",
        date: "October 10, 2018",
        description: "Eden Chen performs at the Lang Lang International Music Foundation’s 10th Anniversary Gala, hosted by Alec Baldwin, at the Cipriani Broadway. The program includes arrangements of Leonard Bernstein’s music and performances by Lang Lang, Ledisi, Roberto Alagna, and Wyclef Jean.",
        links:
            <p>
            Proceeds from this event will expand the Foundation’s Keys of Inspiration™ (KOI) which delivers a structured music curriculum to over 6,000 children in underserved elementary schools across the USA. In 2020, over 30,000 students in 80 schools are projected to participate across the country.
            </p>,
    },
    {
        title: "Music Fest Perugia",
        date: "August 5, 2018",
        description: "Eden Chen performs at the Basilica de San Pietro, as well as the Sala di Notari as part of Music Fest Perugia, representing the Lang Lang International Music Foundation in two weeks of performancces and masterclasses with renowned teachers such as Ilana Vered, Sasha Starcevich, John Perry, Michael Lewin, and Boris Slutsky.",
        links:
            <p> 
                See performance
                <a href="https://www.instagram.com/p/BmyuQ9kAmU8/?taken-by=edenchenmusic"> <u>here</u></a>.
            </p>,
    },
    {
        title: "Andermatt Swiss Alps Classics",
        date: "June 15, 2018",
        description: "Eden Chen performs alongside Lang Lang in the Andermatt Swiss Alps Classics, featuring a theme of \"family,\" including the Labeque sisters Katia and Marielle, as well as Young Scholars of the Lang Lang International Music Foundation.",
        links: "",
    },
    {
        title: "Leeds Piano Festival",
        date: "May 26, 2018",
        description:"Eden Chen performs at London's Wigmore Hall and Leeds' Howard Assembly Rooms as part of the first Leeds Piano Festival organized by the Leeds International Piano Competition, which presents Competition alumni such as Alessio Bax, Lars Vogt, and Sunwook Kim, as well as fellow Young Scholars of the Lang Lang International Music Foundation. Among outreach performances at schools and senior centers, Eden participated in a performance in the Leeds' Town Hall for 1,200 schoolchildren.",
        links: "",
    },
    {
        title: "Grammy's Salute to Classical Concert",
        date: "January 18, 2018",
        description: "Eden Chen performs in the Grammy's Salute to Classical Concert, in Stern Auditorium at Carnegie Hall. He played arrangements of Leonard Bernstein's music, in tribute to his 100th anniversary, as well as accompanying distinguished artists such as Lang Lang, Kiana Lede, and Ledisi. See the video for information on one of many worldwide celebrations of Berstein's legacy.",
        links: "",
    },
    {
        title: "The City of Shenzhen's Exposition in New York",
        date: "November 16, 2017",
        description: "Eden Chen performs next to Lang Lang at The City of Shenzhen's Exposition in New York, fostering cultural exchange between the USA and China. See the video for information on the city's official partnership with Lang Lang.",
        links: "",
    },
    {
        title: "Pritzker Pavilion",
        date: "August 15, 2017",
        description: "Eden Chen performs Selections from Variations on a Theme of Paganini by Rachmaninoff at Pritzker Pavilion in Chicago's Millennium Park with the Midwest Young Artists Orchestra, as part of the Lang Lang International Music Foundation's Summer Music Summit. The summit also included chamber performances, including one at the Chicago Botanic Gardens.",
        links: "",
    },
    {
        title: "JBLFest",
        date: "June 28, 2017",
        description: "Eden Chen performs with Lang Lang at JBLFest in Las Vegas, a weekend of celebration featuring celebrity acts including Demi Lovato and DNCE, as well as a party hosted by Quincy Jones.",
        links:
            <p> 
                Find more information
                <a href="https://www.jbl.com/fest.html"> <u>here</u></a>.
            </p>,
    },
    {
        title: "Zhongshan Art and Culture Center",
        date: "July 11, 2016",
        description: "Eden Chen performs at the Zhongshan Art and Culture Center as part of a public benefit concert, performing solo as well as in piano duo with his sister, Jade Chen.",
        links:
            <p> 
                See their performance of the piano duo Scaramouche, by Darius Milhaud
                <a href="https://www.youtube.com/watch?v=ZIRlo6R8IqI"> <u>here</u>.</a>
            </p>,
    },
    
]
const NewsItems = () => {

    // image query displayed last item first. add images chronologically by modifiedTime.
    const data = useStaticQuery(graphql`
        query NewsQuery {
            allFile(filter: {relativeDirectory: {eq: "news"}}, sort: {order: ASC, fields: modifiedTime}) {
                edges {
                    node {
                        id
                        name
                        childImageSharp {
                            id
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    // take query data and map into Img components
    const images = data.allFile.edges.map((edge) => (
        <Img
            style={{width: "100%", height: "100%", objectFit: "contain"}}
            fluid={edge.node.childImageSharp.fluid}
            key={edge.node.id}
            alt={edge.node.name}
        />
    ));
    
    const shenzhenVideo = (
        <Video>
            <iframe title="shenzhen" width="520" height="300" src="https://www.youtube.com/embed/0EFSfgCd0Bw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Video>
    )

    const grammyVideo = (
        <Video>
            <iframe title="grammy" width="520" height="300" src="https://www.youtube.com/embed/gB10MchCNsU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Video>
    )

    const andermattVideo = (
        <Video>
         <iframe title="andermatt" width="520" height="300" src="https://www.youtube.com/embed/UWX6cghslNo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Video>
    )
    // ordered from most recent (images[n]) to oldest (images[0])
    const media = [
        images[8], images[7], images[6], images[5], images[4], andermattVideo, images[3], grammyVideo, shenzhenVideo, images[2], images[1], images[0],
    ]
    
    const mediaItem = media.map((item, index) => (
        index === media.length-10+1 ?
        <VerticalMediaContainer>{item}</VerticalMediaContainer> : 
        <MediaContainer>{item}</MediaContainer>
    ))
    const textItem = newstext.map((item) => (
        <TextContainer>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <p>{item.description}</p>
            {item.links}
        </TextContainer>
    ))


    // combine media and text components into one and map into <Box/>
    let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]); 
    const textAndMedia = zip(mediaItem, textItem);
    const newsItem = textAndMedia.map( (item, index) => (
        index % 2 === 0 ? 
        <ItemContainer>{item}</ItemContainer> : 
        <ReverseItemContainer>{item}</ReverseItemContainer> 
    ));

    // return news items with <hr> seperators
    return (
        <div>{newsItem.map((item) => (<>{item}<hr></hr></>))}</div>
    )
}

export default NewsItems
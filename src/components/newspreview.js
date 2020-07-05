import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby"
import { newstext } from "../components/newsitems"

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 1.5rem 2rem;
    padding: 2rem 4rem;
    @media (max-width: ${theme.tablet}) {
        grid-template-columns: auto auto;
        padding: 0rem 4rem;
    }
    @media (max-width: ${theme.mobile}) {
        grid-template-columns: auto;
        padding: 0rem 2rem;
        margin: auto;
    }
`
const TextContainer = styled.div`
    padding-top: 2rem;
    h3 {
        font-size: 1.25rem;
    }
`
const Heading = styled.h3`
    display: flex;
    justify-content: center;
    padding: 5rem 0rem 1rem 0rem;
    font-weight: bold;
    align-items: center;
    &::before {
        content: "";
        flex: 1;
        background: linear-gradient(to left, ${theme.teal}, transparent);
        height: 0.1rem;
        margin-right: 1rem
    }
    &::after {
        content: "";
        flex: 1;
        background: linear-gradient(to right, ${theme.teal}, transparent);
        height: 0.1rem;
        margin-left: 1rem;
    }
`
const NewsPreview = () => {

    // image query displayed last item first. add images chronologically by modifiedTime.
    const data = useStaticQuery(graphql`
        query HomeQuery {
            allFile(sort: {order: DESC, fields: modifiedTime}, limit: 3, filter: {relativeDirectory: {eq: "news"}}) {
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
            style={{maxWidth: "20rem", height: "11.25rem", objectFit: "cover"}}
            fluid={edge.node.childImageSharp.fluid}
            key={edge.node.id}
            alt={edge.node.name}
        />
    ));

    // specity max number of characters in item.description
    const text = newstext.map((item, index) => (
        index < 3 ?
        <TextContainer>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <p>
                {item.description.replace(/^(.{150}[^\s]*).*/, "$1").concat(" ... ")}
                <Link to="/news"><u>see more</u></Link>
            </p>
        </TextContainer> : <></>
    ))

    // combine media and text components into one and map into <Box/>
    let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]); 
    const textAndMedia = zip(images, text);
    const newsItem = textAndMedia.map( (item, index) => (
        <div style={{position: "relative", display: "block"}}>
            {item}
        </div>
    ));

    return (
        <>
            <Heading>NEWS</Heading>
            <GridContainer>
                {newsItem}
            </GridContainer>
        </>
    )
}

export default NewsPreview
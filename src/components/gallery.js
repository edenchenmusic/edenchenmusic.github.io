import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 1.5rem 1.5rem;
    padding: 2rem 4rem;
    @media (max-width: ${theme.tablet}) {
        grid-template-columns: auto auto;
        grid-gap: 1.5rem 1.5rem;
        padding: 0rem 1rem;
    }
    @media (max-width: ${theme.mobile}) {
        grid-template-columns: auto;
        grid-gap: 1.5rem 1.5rem;
        padding: 0rem 1rem;
    }
`
const Box = styled.div`
    position: relative;
    display: block;
`
const Overlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
    opacity: 0;
    
    background: ${theme.teal};
    -webkit-transition: opacity 0.25s ease;
    &:hover  {
        opacity: 0.95;
    }
 `
 const Caption = styled.div`
    color: #fff;
    font-family: "Montserrat Regular";
    padding: 2rem 2rem;
 `

const Gallery = () => {
    // text to be displayed in same order as images (most recent first)
    const textItems = [
        "Eden performs at Wigmore Hall.",
        "Eden performs at Wigmore Hall.",
        "Eden performs for schoolchildren as a part of the First Leeds International Piano Festival in Leeds, England.",
        "Eden and Kiana Lede rehearse for the Grammy's Salute to Classical Concert in Carnegie Hall.",
        "Eden and Ledisi take a bow at the Grammy's Salute to Classical Concert in Carnegie Hall.",
        "Eden and Lang Lang take a bow at the City of Shenzhen's Expo in New York.",
        "Eden and Lang Lang perform together at the City of Shenzhen's Expo in New York.",
        "Eden and Lang Lang perform together at the City of Shenzhen's Expo in New York.",
        "Eden introduces himself to an audience at the Pritzker Pavillion.",
        "Eden and Lang Lang recording in James Newton Howard's studio.",
        "Eden and Lang Lang at JBLFest in Las Vegas.",
    ]

    // image query displayed in order of most recent birth first. add images chronologically
    const data = useStaticQuery(graphql`
        query GalleryQuery {
            allFile(filter: {relativeDirectory: {eq: "gallery"}}, sort: {order: ASC, fields: birthtime}) {
                edges {
                    node {
                        id
                        name
                        childImageSharp {
                            id
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
            fluid={edge.node.childImageSharp.fluid}
            key={edge.node.id}
            alt={edge.node.name}
        />
    ));

    const text = textItems.map((item) => (
        <Overlay>
            <Caption>{item}</Caption>
        </Overlay>
    ));
    
    // combine images and text arrays into one and map into <Box/>
    let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]); 
    const imageAndText = zip(images, text);
    const overlayedImages = imageAndText.map( (item) => (
        <Box>
            {item}
        </Box>
    ));

    return (
       <GridContainer>
                {overlayedImages}     
       </GridContainer>
    )
}

export default Gallery
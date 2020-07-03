import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PhotosBanner from "../components/photosbanner";

const VerticalImg = styled.div`
    width: 50%;
    // float: left;
    position: relative;
    display: inline-block;
    @media (max-width: ${theme.mobile}) {
        width: 100%;
        display: block;
    }
`
const HorizontalImg = styled.div`
    width: 100%;
    margin: -0.45rem 0 0 0;
    position: relative;
    @media (max-width: ${theme.mobile}) {
        margin: 0 0;
    }
`

const PhotosPage = ( { data } ) => {

    // take query data and map into Img components
    const images = data.allFile.edges.map((edge) => (
            <Img
                fluid={edge.node.childImageSharp.fluid}
                key={edge.node.id}
                alt={edge.node.name}
            />
    ));

    // add styling to horizontal vs. vertical photos
    const styledImages = images.map((image, index) =>
        ( (index+1) % 3 !=0 ? <VerticalImg>{image}</VerticalImg> : <HorizontalImg>{image}</HorizontalImg> )
    )


    return (
        <Layout isFilled={false}>

            <SEO title="Photos" /> 

            <PhotosBanner />
            <div>{styledImages}</div>

        </Layout>
    )
}

// image query displayed in order by name (photo1, photo2, ...)
export const data = graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "photos"}}, sort: {fields: name, order: ASC}) {
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
`


export default PhotosPage

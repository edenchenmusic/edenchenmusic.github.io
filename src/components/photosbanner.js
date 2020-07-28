import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"
import hero from "../images/about-bg.jpg"

import Title from "../components/title"

const Container = styled.div`
    background: url(${hero}) ;
    background-size: contain;
    background-repeat: no-repeat;
    height: 0;
    width: 100%; 
    padding-top: 66.65%;
`

const MobileText = styled.div`
    background-color: #333;
    color: #ffffff;
    text-align: center;
    padding-top: 4.5rem;
    padding-bottom: 1rem;
    @media (min-width: ${theme.mobile}) {
        display: none;
    }
`

const DesktopText = styled.div`
    display: none;
    @media (min-width: ${theme.mobile}) {
        display: block;
        color: #fff;
        position: absolute;
        top: 40%;
        left: 7%;
        text-align: center;
        h2 {
            font-size: 2.5rem;
            margin-bottom: 0rem;
        }
        h4 {
            color: #999;
        }
    }
    
`
const PhotosBanner = () => {
    return (
        <>
            <MobileText>
                <Title text="PHOTOS" subtext="by Sanzo" />
            </MobileText>
            <DesktopText>
                <h2>PHOTOS</h2>
                <h4>by <a href="https://www.instagram.com/sanzo.studio/"> Sanzo</a></h4>
            </DesktopText>
             <Container />
        </>
    )
}

export default PhotosBanner
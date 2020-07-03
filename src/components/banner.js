import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"
import hero from "../images/photos/photo7.jpg"

const Container = styled.div`
    background: url(${hero})  repeat scroll center center / cover;
    height: 100vh;
    width: 100%; 
    @media (max-width: ${theme.phone}) {
        background-position: 22%;
    }

`

const TextContainer = styled.div`
    color: #ffffff;
    text-shadow: 0px 0px 20px #000000;
    position: absolute;
    bottom: 15%;
    left: 0%;
    right: 0%;
    text-align: center;
    h1 {
        font-size: 3rem;
        margin-bottom: 0.5rem;
    }
    p {
        font-size: 1.5rem;
    }
`

const Banner = () => {
    return (
        <Container>
            <TextContainer>
                <h1>EDEN CHEN</h1>
                <p>pianist</p>
            </TextContainer>
        </Container>
    )
}

export default Banner
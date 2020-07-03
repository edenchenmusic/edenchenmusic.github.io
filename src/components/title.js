import React, {useState} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { theme , GlobalStyles} from "../theme/GlobalStyles"

const Text = styled.div`
    padding-top: 3rem;
    padding-bottom: 1.5rem;
    font-size: 4rem;
    width: 85%;
    margin: auto;
    font-family: "Montserrat Light";
    @media (max-width: ${theme.mobile}) {
        font-size: 2.2rem;
        padding: 2rem 0rem 0rem 0rem;
    }
`
const Subtext = styled.p`
    padding-top: 0.5rem;
    font-size: 1.5rem;
`
const Separator = styled.div`
    display: flex;
    align-items: center;
    &::before {
        content: "";
        flex: 0.1;
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
    @media (max-width: ${theme.mobile}) {
        &::before {
            flex: 1;
        }
    }
`


const Title = (props) => {
    return (
        <Text>
            <Separator>{props.text}</Separator>
            <Subtext>{props.subtext}</Subtext>
        </Text>
    )
}

Title.defaultProps = {
    subtext: "",
}

export default Title




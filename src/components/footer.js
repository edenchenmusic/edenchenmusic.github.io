import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"

export const Email = () => (
    <svg fill="#999" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px"
	 viewBox="0 0 512 512" style={{marginRight: "1rem"}} >
			<path d="M10.688,95.156C80.958,154.667,204.26,259.365,240.5,292.01c4.865,4.406,10.083,6.646,15.5,6.646
				c5.406,0,10.615-2.219,15.469-6.604c36.271-32.677,159.573-137.385,229.844-196.896c4.375-3.698,5.042-10.198,1.5-14.719
				C494.625,69.99,482.417,64,469.333,64H42.667c-13.083,0-25.292,5.99-33.479,16.438C5.646,84.958,6.313,91.458,10.688,95.156z"/>
			<path d="M505.813,127.406c-3.781-1.76-8.229-1.146-11.375,1.542C416.51,195.01,317.052,279.688,285.76,307.885
				c-17.563,15.854-41.938,15.854-59.542-0.021c-33.354-30.052-145.042-125-208.656-178.917c-3.167-2.688-7.625-3.281-11.375-1.542
				C2.417,129.156,0,132.927,0,137.083v268.25C0,428.865,19.135,448,42.667,448h426.667C492.865,448,512,428.865,512,405.333
				v-268.25C512,132.927,509.583,129.146,505.813,127.406z"/>
    </svg>
)

export const Instagram = () => (
    <svg fill="#999" width="1.3rem" height="1.25rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{marginRight: "1rem"}}>
        <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-180 390c-74.441406 0-135-60.558594-135-135s60.558594-135 135-135 135 60.558594 135 135-60.558594 135-135 135zm150-240c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0"/>
        <path d="m407 90c-8.277344 0-15 6.722656-15 15s6.722656 15 15 15 15-6.722656 15-15-6.722656-15-15-15zm0 0"/>
        <path d="m257 150c-57.890625 0-105 47.109375-105 105s47.109375 105 105 105 105-47.109375 105-105-47.109375-105-105-105zm0 0"/>
    </svg>
)

export const Youtube = () => (
    <svg fill="#999" height="1.5rem" viewBox="-21 -100 682.66672 682" width="1.5rem" xmlns="http://www.w3.org/2000/svg" style={{marginRight: "1rem"}}>
        <path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0"/>
    </svg>
)

export const Facebook = () => (
    <svg fill="#999" viewBox="-21 0 682.66669 682.66669" width="1.3rem" height="1.3rem" xmlns="http://www.w3.org/2000/svg" style={{marginRight: "1rem"}}>
        <path d="m604.671875 0h-569.375c-19.496094.0117188-35.30078125 15.824219-35.296875 35.328125v569.375c.0117188 19.496094 15.824219 35.300781 35.328125 35.296875h306.546875v-247.5h-83.125v-96.875h83.125v-71.292969c0-82.675781 50.472656-127.675781 124.222656-127.675781 35.324219 0 65.679688 2.632812 74.527344 3.808594v86.410156h-50.855469c-40.125 0-47.894531 19.066406-47.894531 47.050781v61.699219h95.9375l-12.5 96.875h-83.4375v247.5h162.796875c19.507813.003906 35.324219-15.804688 35.328125-35.3125 0-.003906 0-.007812 0-.015625v-569.375c-.007812-19.496094-15.824219-35.30078125-35.328125-35.296875zm0 0"/>
    </svg>
)

const Container = styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    height: 16rem;
    background-color: #f0f0f0;
`
const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 5rem;
    padding-left: 1.25rem;
`
const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    font-size: 0.75rem;
`
const Icon = styled.span`
    cursor: pointer;
    &:hover {
        filter: invert(63%) sepia(57%) saturate(267%) hue-rotate(138deg) brightness(90%) contrast(89%);
        -moz-transition: all 0.5s ease-in-out 0s;
        -ms-transition: all 0.5s ease-in-out 0s;
        -o-transition: all 0.5s ease-in-out 0s;
        -webkit-transition: all 0.5s ease-in-out 0s;
        transition: all 0.5s ease-in-out 0s;
    }
`
const Text = styled.span`
    &:hover p {
        display: none;
    }
    &:hover:before {
        content: "ﾟ･:*  Created by Jade Chen  *:･ﾟ";
        color: ${theme.teal};
    }
`
const Footer = () => {

    return (
        <Container>
            <IconContainer>
                <Icon><Email /></Icon>
                <Icon><Instagram /></Icon>
                <Icon><Youtube /></Icon>
                <Icon><Facebook /></Icon>
            </IconContainer>
            <TextContainer>
                <Text><p>©2018 BY EDEN CHEN MUSIC.</p></Text>
            </TextContainer>
        </Container>
    )
}

export default Footer
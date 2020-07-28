import { createGlobalStyle } from "styled-components";
import MontserratLight from "../static/Montserrat-Light.ttf";
import MontserratLightItalic from "../static/Montserrat-LightItalic.ttf";
import MontserratRegular from "../static/Montserrat-Regular.ttf";

export const theme = {
    darkGray: '#292929',
    teal: '#65acb4',
    white: '#ffffff',

    phone: "480px",
    mobile: "767px",
    tablet: "992px",
    desktop: "1200px",
    largeDesktop: "1440px"
}

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat Regular';
        font-style: normal;
        font-weight: normal;
        src: url(${MontserratRegular}) format('woff');
    }


    @font-face {
        font-family: 'Montserrat Light';
        font-style: normal;
        font-weight: normal;
        src: url(${MontserratLight}) format('woff');
    }


    @font-face {
        font-family: 'Montserrat Light Italic';
        font-style: normal;
        font-weight: normal;
        src: url(${MontserratLightItalic}) format('woff');
    }

    body {
        font-family: 'Montserrat Light', sans-serif;
        font-size: 15px;
        margin: 0;
        padding: 0;
        color: #333333;
    }

    a {
        color: inherit;
        text-decoration: none !important;
        -moz-transition: all 0.5s ease-in-out 0s;
        -ms-transition: all 0.5s ease-in-out 0s;
        -o-transition: all 0.5s ease-in-out 0s;
        -webkit-transition: all 0.5s ease-in-out 0s;
        transition: all 0.5s ease-in-out 0s;
    }
      
    a:hover {
        -moz-transition: all 0.5s ease-in-out 0s;
        -ms-transition: all 0.5s ease-in-out 0s;
        -o-transition: all 0.5s ease-in-out 0s;
        -webkit-transition: all 0.5s ease-in-out 0s;
        transition: all 0.5s ease-in-out 0s;
    }
      
    a:hover, a:focus {
        color: #65acb4;
        text-decoration: underline;
    }

    ::selection {
        background: #c5e3e6; /* WebKit/Blink Browsers */
      }
    ::-moz-selection {
        background: #c5e3e6; /* Gecko Browsers */
    }
`;
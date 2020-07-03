/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyles, theme } from "../theme/GlobalStyles"

import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.css"

const Container = styled.div`
  margin: 0;
  /* max-width: ${theme.largeDesktop}; */
  padding: 0 0 0;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  
`

const Layout = (props) => {
  const children = props.children
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            title
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Navbar
        menuLinks={data.site.siteMetadata.menuLinks}
        isFilled={props.isFilled}
      />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

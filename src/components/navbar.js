import React, {useState} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { theme } from "../theme/GlobalStyles"


const Container = styled.div`
  width: 100%;
  display: ${props => props.isFilled ? "flex" : "block"};
  padding-right: 2rem;
  background-color: ${props => props.isFilled ? theme.white : "transparent"};
  opacity: ${props => props.isFilled ? "95%" : "100%"};
  border-bottom: ${props => props.isFilled ? "1px solid #999" : "none"};
`
const TabContainer = styled.div`
  display: none;
  @media (min-width: ${theme.tablet}) {
    display: flex;
    flex-direction: row;
    float: right;
    margin-left: auto;
  }
`
const MobileTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  top: 10%;
  left: 8%;
  right: 8%;
  border-radius: 16px;
  // -webkit-backface-visibility: hidden;
  z-index: 1;
  max-height: ${props => props.showMenu ? "30rem" : "0"};
  overflow: hidden;
  transition: max-height 0.5s ease-in;
  @media (min-width: ${theme.phone}) {
    left: auto;
    right: 2rem;
    width: 40%;
  }
  @media (min-width: ${theme.tablet}) {
    display: none;
  }
`
const Tab = styled.div`
  margin: 0;
  text-align: center;
  padding: 1.5rem 0rem;
  border-top: 1px solid #a7a7a7;
  &:first-child {
    border-top: none;
    border-radius: 16px 16px 0 0;
  }
  &:last-child {
    border-radius: 0 0 16px 16px;
  }
  &:hover {
    background-color: #f0f0f0;
  }
  @media (min-width: ${theme.phone}) {
    padding: 0.5rem 0rem;
  }
  @media (min-width: ${theme.tablet}) {
    margin: 1rem 1.2rem;
    border-top: none;
    &:hover {
      background-color: inherit;
    }
  }
 
  
`
const Icon = styled.div`
  display: flex;
  float: right;
  padding: 1.5rem 0rem 1rem ;
  margin-left: auto;
  cursor: pointer;
  @media (min-width: ${theme.tablet}) {
    display: none;
  }
`
const StyledLink = styled(Link)`
  color: ${theme.darkGray};
  @media (min-width: ${theme.tablet}) {
    color: ${props => props.isFilled ? theme.darkGray : "#fff"};
  }
`

const GrayHamburger = () => (
  <svg 
    height="20pt" 
    viewBox="0 -53 384 384"
    width="20pt"
    fill="#666"
    xmlns="http://www.w3.org/2000/svg"
>
    <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
    <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
    <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
  </svg>
)
const WhiteHamburger = () => (
  <svg 
  height="20pt" 
  viewBox="0 -53 384 384"
  width="20pt"
  fill="#fff"
  xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
    <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
    <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
  </svg>
)

const Navbar = (props) => {

  const tabs = props.menuLinks.map((menuLink) => (
    <Tab>
      <StyledLink to={menuLink.link} isFilled={props.isFilled}>
        {menuLink.title}
      </StyledLink>
    </Tab>
  ));

  const [showMenu, setShowMenu] = useState(false);

  const changeMenu = (showMenu) => (
    setShowMenu(!showMenu)
  )

  return (
    <Container isFilled={props.isFilled}>
        <Icon onClick={() => changeMenu(showMenu)}>
          {props.isFilled ? <GrayHamburger/> : <WhiteHamburger/>}
        </Icon>

        <TabContainer>
          {tabs}      
        </TabContainer>

        <MobileTabContainer showMenu={showMenu}>
          {tabs}
        </MobileTabContainer>
      
    </Container>

  )
}


Container.propTypes = {
  isFilled: PropTypes.bool.isRequired,
}

StyledLink.propTypes = {
  isFilled: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
}

export default Navbar

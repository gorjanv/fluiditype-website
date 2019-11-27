import PropTypes from "prop-types"
import React from "react"

import "../styles/styles.css"
import fdlogo from "../images/Fluiditype-logo.png"
import Button from "../components/button"

const Header = ({ siteTitle }) => (
    <header
    style={{
      alignItems: 'center',
      display: 'flex',
      position: 'fixed',
      justifyContent: 'space-between',
      width: '100%',
      padding: '32px',
      height: '65px',
      backgroundColor: 'white',
      borderBottom: '1px solid black',
    }}
      >
      {/* <p
      style={{
        margin: '0',
      }}>
          {siteTitle}
      </p> */}
      <img src={fdlogo} alt="fd" 
      style={{
        width: '50px',
      }}></img>
      <Button>Download</Button>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Fluiditype`,
}

export default Header

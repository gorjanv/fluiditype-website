import PropTypes from "prop-types"
import React from "react"

import "../styles/styles.css"
import Logo from "./fluidtype-eye-logo"
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
      maxWidth: '1440px',
    }}
      >
      <Logo />
      <Button>DOWNLOAD</Button>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Fluiditype`,
}

export default Header

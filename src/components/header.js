import PropTypes from "prop-types"
import React from "react"

import "../styles/styles.css"

const Header = ({ siteTitle }) => (
    <header
    style={{
      alignItems: 'center',
      display: 'flex',
      position: 'fixed',
      justifyContent: 'space-between',
      width: '100%',
      padding: '32px',
      height: '90px',
      backgroundColor: 'white',
      borderBottom: '1px solid black',
    }}
      >
      <p
      style={{
        margin: '0',
      }}>
          {siteTitle}
      </p>
      <button class="header">Github</button>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Fluiditype`,
}

export default Header

import PropTypes from "prop-types"
import React from "react"

import "../styles/styles.css"

const Header = ({ siteTitle }) => (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1440,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <p>
          {siteTitle}
      </p>
      <button>Download</button>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Fluiditype`,
}

export default Header

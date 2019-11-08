import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1440,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>
          {siteTitle}
      </h1>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Fluiditype`,
}

export default Header

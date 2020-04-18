import React from "react"
import "../styles/button.css"
import "../styles/styles.css"

const Button = ({ children }) => (
      <button type="button">
        <a href="https://github.com/sboriskirov/fluiditype" class="header" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </button>

  )
  
  export default Button
  
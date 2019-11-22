import React from "react"

import { COLORS } from "../styles/constants"

import "../styles/fluiditype.css"
import "../styles/styles.css"
import Button from "../components/button"
import fd4 from "../images/fd-4.gif"

const Content = () => (
  <div>
    <content>
      <div>
        <h2>Includes plugins for analytics</h2>
        <p style={{ color: COLORS.gray }}>
          Includes plugins for analytics, building sitemaps, and optimizing
          images,Includes plugins for analytics, building sitemaps, and optimizing
          images
        </p>
        <Button>Download</Button>
      </div>
      <div>
      <img src={fd4} alt="fd4" />
      </div>    
    </content>
  </div>
)

export default Content

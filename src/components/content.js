import React from "react"

import { COLORS } from "../styles/constants"
import "../styles/fluiditype.css"
import "../styles/styles.css"
import visualasset5 from "../images/visualasset5.gif"


const Content = () => (
  <div>
    <content>
      <div>
        <h1>Fluiditype</h1>
        <p style={{ color: COLORS.gray }}>
          Includes plugins for analytics, building sitemaps, and optimizing
          images,Includes plugins for analytics, building sitemaps, and optimizing
          images
        </p>
      </div>
      <div>
        <img src={visualasset5} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
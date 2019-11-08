import React from "react"

import { COLORS } from "../styles/constants"
import "../styles/fluiditype.css"
import "../styles/styles.css"
import visualasset2 from "../images/visualasset2.gif"


const ContentReverse = () => (
  <div>
    <content>
        <div>
            <img src={visualasset2} alt="a blank card floating over colorful graphics" />
        </div>
        <div>
            <h1>Fluiditype</h1>
            <p style={{ color: COLORS.gray }}>
          Includes plugins for analytics, building sitemaps, and optimizing
          images,Includes plugins for analytics, building sitemaps, and optimizing
          images
            </p>
        </div>
    </content>
  </div>
)

export default ContentReverse

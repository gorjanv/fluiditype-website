import React from "react"

import { COLORS } from "../styles/constants"
import "../styles/fluiditype.css"
import "../styles/styles.css"
import fd from "../images/fluiditype-4k-cv.gif"


const ContentCenter = () => (
  <div>
    <content class="center">
        <div>
            <h1>Fluid, flexible & simple typography </h1>
            <p style={{ color: COLORS.gray }}>
            This small CSS library serves to avoid the responsive web by 
            focusing on pure fluidity in which the system communicate what 
            size to be rendered. Recommend to be used for <mark>blogs</mark>, <mark>portfolios</mark>, 
            <mark>documentation</mark> & and <mark> simplistic text websites</mark>.
            </p>
        </div>
        <div>
          <img src={fd} alt="fd" />
        </div>    
    </content>
  </div>
)

export default ContentCenter

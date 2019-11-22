import React from "react"

import { COLORS } from "../styles/constants"
import "../styles/fluiditype.css"
import "../styles/styles.css"
import fd from "../images/fluiditype-4k-cv.gif"


const ContentCenter = () => (
  <div>
    <content class="center">
        <div>
            <h1>Fluid simple typography boilerplate</h1>
            <p style={{ color: COLORS.gray }}>
              This small CSS library serves to avoid responsive web but focus
               more on fluidity and systematic approach which will let the interface
                to communicate with the environment and not to be broken by rules.
                 This would work great for blogs, portfolio websites and simple pages.
            </p>
        </div>
        <div>
          <img src={fd} alt="fd" />
        </div>    
    </content>
  </div>
)

export default ContentCenter

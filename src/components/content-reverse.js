import React from "react"

import { COLORS } from "../styles/constants"
import "../styles/fluiditype.css"
import "../styles/styles.css"
import herofluiditype from "../images/hero-fluiditype.gif"


const ContentReverse = () => (
  <div>
    <content>
        <div>
            <img src={herofluiditype} alt="herofluiditype" />
        </div>
        <div>
            <h2>Fully fluid, small and easy to use</h2>
            <p style={{ color: COLORS.gray }}>
            Includes plugins for analytics, building sitemaps, and optimizing
            images,Includes plugins for analytics, building sitemaps, and optimizing
            images
            </p>
            <ul>
              <li>3kb only</li>
              <li>Presented and designed with the Inter font.</li>
              <li>Just copy paste or download the file</li>
            </ul>
        </div>
    </content>
  </div>
)

export default ContentReverse

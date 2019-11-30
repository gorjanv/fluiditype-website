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
            <h2>Easy to adopt and customise</h2>
            <p style={{ color: COLORS.gray }}>
            Using a simple formula which renders a minimum font-size and a viewport-width 
            metric to show a size relevant to the screen size from which the information is viewed.
            </p>
            <ul>
              <li>3kb only</li>
              <li>Best worked and tested with the <a href="https://rsms.me/inter/">Inter</a> font</li>
              <li>Main rules of web typography are taken in mind while desinged</li>
              <li>Copy the css or download it from Github</li>
            </ul>
        </div>
    </content>
  </div>
)

export default ContentReverse

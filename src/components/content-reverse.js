import React from "react"

import { COLORS } from "../styles/constants"
import "../styles/fluiditype.css"
import "../styles/styles.css"
import herofluiditype from "../images/hero-fluiditype.gif"


const ContentReverse = () => (
  <section class="section-second">
      <div>
          <img src={herofluiditype} alt="herofluiditype" />
      </div>
      <div>
          <h2>Easy to adopt and customise</h2>
          <p style={{ color: COLORS.gray }}>
          Using a simple formula of font-size and a viewport-width which renders the size of the font.
          </p>
          <ul>
            <li>3kb only</li>
            <li>Presented with the powerful <a href="https://rsms.me/inter/" target="_blank">Inter</a> font</li>
            <li>Copy the css or download it from Github</li>
          </ul>
      </div>
  </section>
)

export default ContentReverse

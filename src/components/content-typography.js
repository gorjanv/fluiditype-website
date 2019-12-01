import React from "react"

import "../styles/fluiditype.css"
import "../styles/styles.css"


const ContentTypography = () => (
  <div>
    <content class="content-typography">
        <div>
          <h1>Fluiditype content schema</h1>
          <p>You can review the font behaviour and the spectrum of text types that 
            Fluiditype covers like Headings, paragraphs, lists & code-snippeds.</p>
          <hr class="separator"></hr>
          <h4><span id="headings" class="hash-heading">#</span>Headings</h4>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <hr class="separator"></hr>
          <h4><span id="paragraphs" class="hash-heading">#</span>Paragraphs & text styles</h4>
          <p>Fluitype is a typography css framework, which can easily be added to any webpage.The magic is behind the calculations done while incorporate the <code>vw</code> which stands for <code>viewport-width</code> and it is fully responsive and fluid to the size of the viewport.</p>
          <blockquote>This is a blockquote, you can use this guy to showcase how a quote as part of the typography can work. This is a component that has the purpose to show improtancy.</blockquote>
          <p>Just a simple paragraph text, that way you can easily visualize the <mark>behavior</mark> when you change the viewport, the rescaling and fluidity in action. This is a font type called Inter created for Figma, also used by Github.</p>
          <ul>
            <li><b>Bolded text</b></li>
            <li><i>Italic text</i></li>
            <li><strong>Strong text</strong></li>
            <li><u>Underlined text</u></li>
            <li><del>Deleted text</del></li>
          </ul>
          <hr class="separator"></hr>
          <h4><span id="lists" class="hash-heading">#</span>List and List styles</h4>
          <h5>Unoredered List</h5>
          <ul>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
            <li>List 4</li>
          </ul>
          <h5>Ordered List</h5>
          <ol>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
            <li> List 4
              <ul>
                <li>List 4.1</li>
                <li>List 4.2</li>
                <li>List 4.3</li>
                <li>List 4.4</li>
                </ul>
            </li>
          </ol>
          <hr class="separator"></hr>
          <h4><span id="codesnippets" class="hash-heading">#</span>Code snippets</h4>
          <h5>Code quote</h5>
          <code>font-size: calc(var(--fontSize) * 1.1);</code>
          <h5>Code preview</h5>
          <pre>pre </pre>
          <hr class="separator"></hr>
          <h4><span id="links" class="hash-heading">#</span>Links and hyperlinks</h4>
          <ul>
            <li><a href="https://github.com/sboriskirov/fluiditype" target="_blank" rel="noopener noreferrer">View in GitHub</a></li>
            <li><a href="https://codepen.io/bkirov/pen/BayBbdB" target="_blank" rel="noopener noreferrer">Copy from Codepen</a></li>
          </ul>
        </div>    
    </content>
  </div>
)

export default ContentTypography

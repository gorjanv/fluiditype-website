import React from "react"

import "../styles/fluiditype.css"
import "../styles/styles.css"


const ContentTypography = () => (
    <section class="fluiditype-schema">
        <div>
          <h1>Fluiditype content schema</h1>
          <p>You can review the font behaviour and the spectrum of text types that 
            Fluiditype covers like Headings, paragraphs, lists & code-snippeds.</p>
          <hr class="separator"></hr>
          <h6><span id="headings" class="hash-heading">Headings</span></h6>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <hr class="separator"></hr>
          <h6><span id="paragraphs" class="hash-heading">Paragraphs & text styles</span></h6>
          <p>Fluiditype is a typography css framework, which can easily be added to any webpage.The magic is behind the calculations done while incorporate the <code>vw</code> which stands for <code>viewport-width</code> and it is fully responsive and fluid to the size of the viewport.</p>
          <blockquote>You want to understand and test how this setup works, it is easy. Just rescale the screen and you will se the typography starting to adjust.</blockquote>
          <p>Just a simple paragraph text, that way you can easily visualize the <mark>behavior</mark> when you change the viewport, the rescaling and fluidity in action. This is a font type called Inter created for <a href="https://figma.com" target="_blank" rel="noopener noreferrer">Figma</a>, also used by <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>.</p>
          <ul>
            <li><b>Bolded text</b></li>
            <li><i>Italic text</i></li>
            <li><strong>Strong text</strong></li>
            <li><u>Underlined text</u></li>
            <li><del>Strikethrough text</del></li>
          </ul>
          <hr class="separator"></hr>
          <h6><span id="lists" class="hash-heading">List and List styles</span></h6>
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
          <h6><span id="codesnippets" class="hash-heading">Code snippets</span></h6>
          <h5>Code quote</h5>
          <code>font-size: calc(var(--fontSize) * 1.1);</code>
          <h5>Code preview</h5>
          <pre>pre </pre>
          <hr class="separator"></hr>
          <h6><span id="links" class="hash-heading">Links and hyperlinks</span></h6>
          <ul>
            <li><a href="https://github.com/sboriskirov/fluiditype" target="_blank" rel="noopener noreferrer">View in GitHub</a></li>
            <li><a href="https://codepen.io/bkirov/pen/BayBbdB" target="_blank" rel="noopener noreferrer">Copy from Codepen</a></li>
          </ul>
        </div>  
    </section>
)

export default ContentTypography

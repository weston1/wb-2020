import React from 'react'

const Footer = ({ content }) => (
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1>Hey!</h1>
          <p>
            Thanks for reaching the bottom of this page. If you want to learn
            more about me or what I'm working on, I’ve got a bunch of links for
            you on the right. Explore them at your own peril.
          </p>
          <p>Alternatively, check out this fancy sheet of paper Résumé</p>
        </div>
        <div class="col-lg-4">
          <div>
            <p>
              Want to stay in touch?
              <br />
              hello@wb.com
            </p>
          </div>

          <div>
            <div class="row">
              <img src="./assets/svg/visual-studio-code-1.svg" width="50px" />
              <img src="./assets/svg/visual-studio-code-1.svg" width="50px" />
              <img src="./assets/svg/visual-studio-code-1.svg" width="50px" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="container has-text-centered"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </footer>
)

export default Footer

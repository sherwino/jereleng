import * as React from "react"
import { Link, graphql } from "gatsby"

export const Summary = () => {
  return (
    <section id="two">
    <div className="inner">
      <header className="major">
        <h2>Massa libero</h2>
      </header>
      <p>
        Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
        libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
        Pellentesque condimentum sem. In efficitur ligula tate urna.
        Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
        dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
        sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
        amet pharetra et feugiat tempus.
      </p>
      <ul className="actions">
        <li>
          <a href="landing.html" className="button next">
            Get Started
          </a>
        </li>
      </ul>
    </div>
    </section>    
  )
}

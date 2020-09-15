import * as React from "react"
import { Link, graphql } from "gatsby"

export const FeaturedProjects = () => {
  return (
    <section id="one" className="tiles">
      <article>
        <span className="image">
          <img src="images/pic01.jpg" alt="" />
        </span>
        <header className="major">
          <h3>
            <Link href="landing.html" className="link">
              Aliquam
            </Link>
          </h3>
          <p>Ipsum dolor sit amet</p>
        </header>
      </article>
      <article>
        <span className="image">
          <img src="images/pic02.jpg" alt="" />
        </span>
        <header className="major">
          <h3>
            <Link href="landing.html" className="link">
              Tempus
            </Link>
          </h3>
          <p>feugiat amet tempus</p>
        </header>
      </article>
      <article>
        <span className="image">
          <img src="images/pic03.jpg" alt="" />
        </span>
        <header className="major">
          <h3>
            <Link href="landing.html" className="link">
              Magna
            </Link>
          </h3>
          <p>Lorem etiam nullam</p>
        </header>
      </article>
      <article>
        <span className="image">
          <img src="images/pic04.jpg" alt="" />
        </span>
        <header className="major">
          <h3>
            <Link href="landing.html" className="link">
              Ipsum
            </Link>
          </h3>
          <p>Nisl sed aliquam</p>
        </header>
      </article>
      <article>
        <span className="image">
          <img src="images/pic05.jpg" alt="" />
        </span>
        <header className="major">
          <h3>
            <Link href="landing.html" className="link">
              Consequat
            </Link>
          </h3>
          <p>Ipsum dolor sit amet</p>
        </header>
      </article>
      <article>
        <span className="image">
          <img src="images/pic06.jpg" alt="" />
        </span>
        <header className="major">
          <h3>
            <Link href="landing.html" className="link">
              Etiam
            </Link>
          </h3>
          <p>Feugiat amet tempus</p>
        </header>
      </article>
    </section>
  )
}

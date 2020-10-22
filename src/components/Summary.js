import * as React from "react"
import { Link, graphql } from "gatsby"

// TODO: pull this data from CMS and markdown
export const Summary = () => {
  return (
    <section id="two">
      <div className="inner">
        <header className="major">
          <h2>What we do</h2>
        </header>
        <p>
          If you need somebody, an engineering technician who makes detailed
          technical drawings or plans for machinery, buildings, electronics,
          infrastructure, and etc don't hesitate to react out. We use software
          such as AutoCAD, SolidWorks and other 3D modeling tools to convert the
          designs, plans, and layouts of engineers and architects into a set of
          technical drawings. JER Engineering and Design, can also generate and
          create all of the documents you need to fabricate and bring your ideas
          to life.
        </p>
        <ul className="actions">
          <li>
            <Link to="/about" className="button next">
              Learn more about JER.
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

import * as React from "react"
import { Link, graphql } from "gatsby"

export const MainFooter = () => {
  return (
    <footer id="footer">
      <div className="inner">
        <ul className="icons">
          <li>
            <Link to="#" className="icon brands alt fa-twitter">
              <span className="label">Twitter</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="icon brands alt fa-facebook-f">
              <span className="label">Facebook</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="icon brands alt fa-instagram">
              <span className="label">Instagram</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="icon brands alt fa-github">
              <span className="label">GitHub</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="icon brands alt fa-linkedin-in">
              <span className="label">LinkedIn</span>
            </Link>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Untitled</li>
          <li>
            Design: <Link to="https://html5up.net">HTML5 UP</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

import * as React from "react"
import { Link, graphql } from "gatsby"

export const Contact = () => {
  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form method="post" action="#">
            <div className="fields">
              <div className="field half">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="6"></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="primary" />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
          </form>
        </section>
        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon solid alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="#">information@untitled.tld</a>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon solid alt fa-phone"></span>
              <h3>Phone</h3>
              <span>(000) 000-0000 x12387</span>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon solid alt fa-home"></span>
              <h3>Address</h3>
              <span>
                1234 Somewhere Road #5432
                <br />
                Nashville, TN 00000
                <br />
                United States of America
              </span>
            </div>
          </section>
        </section>
      </div>
    </section>
  )
}

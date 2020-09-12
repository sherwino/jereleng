import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Features from "../components/Features"
import ProjectList from "../components/ProjectList"

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <div>
      <div className="is-preload">
        {/* <!-- Wrapper --> */}
        <div id="wrapper">
          {/* <!-- Banner --> */}
          <section id="banner" className="major">
            <div className="inner">
              <header className="major">
                <h1>{title}</h1>
              </header>
              <div className="content">
                <p>
                  {subheading}
                </p>
                <ul className="actions">
                  <li>
                    <a href="#one" className="button next scrolly">
                      See my projects
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* <!-- Main --> */}
          <div id="main">
            {/* <!-- One --> */}
            <section id="one" className="tiles">
              <article>
                <span className="image">
                  <img src="images/pic01.jpg" alt="" />
                </span>
                <header className="major">
                  <h3>
                    <a href="landing.html" className="link">
                      Aliquam
                  </a>
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
                    <a href="landing.html" className="link">
                      Tempus
                  </a>
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
                    <a href="landing.html" className="link">
                      Magna
                  </a>
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
                    <a href="landing.html" className="link">
                      Ipsum
                  </a>
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
                    <a href="landing.html" className="link">
                      Consequat
                  </a>
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
                    <a href="landing.html" className="link">
                      Etiam
                  </a>
                  </h3>
                  <p>Feugiat amet tempus</p>
                </header>
              </article>
            </section>

            {/* <!-- Two --> */}
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
          </div>

          {/* <!-- Contact --> */}
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
                      <input
                        type="submit"
                        value="Send Message"
                        className="primary"
                      />
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

          {/* <!-- Footer --> */}
          <footer id="footer">
            <div className="inner">
              <ul className="icons">
                <li>
                  <a href="#" className="icon brands alt fa-twitter">
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands alt fa-facebook-f">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands alt fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands alt fa-github">
                    <span className="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands alt fa-linkedin-in">
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
              </ul>
              <ul className="copyright">
                <li>&copy; Untitled</li>
                <li>
                  Design: <a href="https://html5up.net">HTML5 UP</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )

//   <div
//   className="full-width-image margin-top-0"
//   style={{
//     backgroundImage: `url(${
//       !!image.childImageSharp ? image.childImageSharp.fluid.src : image
//     })`,
//     backgroundPosition: `top left`,
//     backgroundAttachment: `fixed`,
//   }}
// >
//   <div
//     style={{
//       display: "flex",
//       height: "150px",
//       lineHeight: "1",
//       justifyContent: "space-around",
//       alignItems: "left",
//       flexDirection: "column",
//     }}
//   >
//     <h1
//       className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
//       style={{
//         boxShadow:
//           "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
//         backgroundColor: "rgb(255, 68, 0)",
//         color: "white",
//         lineHeight: "1",
//         padding: "0.25em",
//       }}
//     >
//       {title}
//     </h1>
//     <h3
//       className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
//       style={{
//         boxShadow:
//           "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
//         backgroundColor: "rgb(255, 68, 0)",
//         color: "white",
//         lineHeight: "1",
//         padding: "0.25em",
//       }}
//     >
//       {subheading}
//     </h3>
//   </div>
// </div>
// <section className="section section--gradient">
//   <div className="container">
//     <div className="section">
//       <div className="columns">
//         <div className="column is-10 is-offset-1">
//           <div className="content">
//             <div className="content">
//               <div className="tile">
//                 <h1 className="title">{mainpitch.title}</h1>
//               </div>
//               <div className="tile">
//                 <h3 className="subtitle">{mainpitch.description}</h3>
//               </div>
//             </div>
//             <div className="columns">
//               <div className="column is-12">
//                 <h3 className="has-text-weight-semibold is-size-2">
//                   {heading}
//                 </h3>
//                 <p>{description}</p>
//               </div>
//             </div>
//             <Features gridItems={intro.blurbs} />
//             <div className="columns">
//               <div className="column is-12 has-text-centered">
//                 <Link className="btn" to="/products">
//                   See all products
//                 </Link>
//               </div>
//             </div>
//             <div className="column is-12">
//               <h3 className="has-text-weight-semibold is-size-2">
//                 Latest stories
//               </h3>
//               <ProjectList />
//               <div className="column is-12 has-text-centered">
//                 <Link className="btn" to="/projects">
//                   Read more
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`

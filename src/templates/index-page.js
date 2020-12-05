import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import {
  Layout,
  IntroHeader,
  FeaturedProjects,
  MainFooter,
  Summary,
} from "../components"

export const IndexPageTemplate = ({ title, subheading, button, mainpitch }) => (
  <div>
    <div className="is-preload">
      <div id="wrapper">
        <IntroHeader title={title} subheading={subheading} button={button} />
        <div id="main">
          <FeaturedProjects />
          <Summary mainpitch={mainpitch} />
        </div>
        <MainFooter />
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

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  button: PropTypes.string,
  mainpitch: PropTypes.object,
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
        button={frontmatter.button}
        mainpitch={frontmatter.mainpitch}
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
        button
        mainpitch {
          title
          description
          pitchbutton
        }
      }
    }
  }
`

import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"
import { kebabCase } from "lodash"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"

// export const ProjectTemplate = ({
//   content,
//   contentComponent,
//   description,
//   tags,
//   title,
//   helmet,
// }) => {
//   const PageContent = contentComponent || Content
//   console.log("ProjectTemplate", {
//     content,
//     contentComponent,
//     description,
//     tags,
//     title,
//     helmet,
//     PageContent
//   })

//   return (
//     <section className="section section--gradient">
//       <div className="container">
//         <div className="columns">
//           <div className="column is-10">
//             <div className="section">
//               <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
//                 {title}
//               </h2>
//               <PageContent className="content" content={content} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// ProjectTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func,
// }

// const ProjectPage = ({ data }) => {
//   const { markdownRemark: post } = data
// console.log("Projectpage", {data})
//   return (
//     <Layout>
//       <ProjectTemplate
//         contentComponent={HTMLContent}
//         title={post.frontmatter.title}
//         content={post.html}
//       />
//     </Layout>
//   )
// }

// ProjectPage.propTypes = {
//   data: PropTypes.object.isRequired,
// }

// export default ProjectPage

// export const projectPageQuery = graphql`
// query ProjectListQuery {
//   allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project-page"}}}) {
//     nodes {
//       frontmatter {
//         title
//         templateKey
//         tags
//         featuredpost
//         description
//         date
//       }
//     }
//   }
// }
// `

// export const projectPageQuery = graphql`
//   query ProjectByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         description
//         tags
//       }
//     }
//   }
// `

export const ProjectTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  excerpt,
  image,
}) => {
  const PostContent = contentComponent || Content

  console.log("wino project template", { excerpt, content, image })

  return (
    <section style={{ height: "100vh" }} className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-5">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <img style={{ maxHeight: "75vh" }} src={image} />
          </div>
          <div className="column is-6">
            <div style={{ margin: "5rem 0" }}></div>
            <b>{description}</b>
            <p>{excerpt}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

ProjectTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  excerpt: PropTypes.string,
  image: PropTypes.string,
}

const Project = ({ data }) => {
  const { markdownRemark: post } = data

  console.log("wino markdown data", { post, data })

  return (
    <Layout>
      <ProjectTemplate
        content={""}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Project">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        excerpt={post.excerpt}
        image={post.frontmatter.featuredimage.publicURL}
      />
    </Layout>
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Project

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          publicURL
        }
      }

      excerpt(pruneLength: 1600)
    }
  }
`

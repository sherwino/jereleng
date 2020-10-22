import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

const FeaturedComponent = props => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  return (
    <section id="one" className="tiles">
      {posts.map(post => (
        <article>
          <span className="image">
            <img src="images/pic01.jpg" alt="" />
          </span>
          <header className="major">
            <h3>
              <Link to={post.node.fields.slug} className="link">
                {post.node.frontmatter.title}
              </Link>
            </h3>
            <p>{post.node.frontmatter.date}</p>
          </header>
        </article>
      ))}
    </section>
  )
}

const featuredQuery = graphql`
  query FeaturedProjectsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project-page" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
          }
        }
      }
    }
  }
`

export const FeaturedProjects = () => (
  <StaticQuery
    query={featuredQuery}
    render={(data, count) => <FeaturedComponent data={data} count={count} />}
  />
)

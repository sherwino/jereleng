import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

const FeaturedComponent = (props) => {
    const { data } = props;
    const { edges: posts } = data.allMarkdownRemark;

    console.log("FeaturedContent", { data, props, posts })
    return (
        <section id="one" className="tiles">
            {posts.map((post) => (
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
            <article>
                <span className="image">
                    <img src="images/pic01.jpg" alt="" />
                </span>
                <header className="major">
                    <h3>
                        <Link to="/" className="link">
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
                        <Link to="/" className="link">
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
                        <Link to="/" className="link">
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
                        <Link to="/" className="link">
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
                        <Link to="/" className="link">
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
                        <Link to="/" className="link">
                            Etiam
            </Link>
                    </h3>
                    <p>Feugiat amet tempus</p>
                </header>
            </article>
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



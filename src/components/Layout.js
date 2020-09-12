import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "./all.sass"
import useSiteMetadata from "./SiteMetadata"

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/JER-Black-180.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/JER-Black-32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/JER-Black-96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/JER-Black.svg"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/JER-Black.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/JER-1200.png" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}

export default TemplateWrapper

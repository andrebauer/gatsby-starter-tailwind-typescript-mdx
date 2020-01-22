import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import "../css/style.css"
import { RouterProps } from "@reach/router"
import { Navigation } from "../components/navigation"

type LayoutProps = React.ReactNode & RouterProps

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div class="bg-gray-100">
      <div class="flex flex-col min-h-screen">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Navigation />
        <div class="flex-1 flex-col h-full mx-auto w-full max-w-4xl bg-blue-100">
          <main class="h-full p-2 text-blue-900">{children}</main>
        </div>
        <div class="mx-auto max-w-4xl">
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Layout

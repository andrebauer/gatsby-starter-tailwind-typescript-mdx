import React from "react"
import { graphql, Link } from "gatsby"
import * as DesignSystem from "./design-system"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
export default function PageTemplate({ data: { mdx } }) {
  return (
    <div className="p-2">
      <div className="bg-gray-200">
        <Link to="/">Back Home</Link>
        <h1 className="text-blue-600 text-2xl">
          MDX Sourced Post: {mdx.frontmatter.title}
        </h1>
      </div>
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          h1: DesignSystem.H1,
          h2: DesignSystem.H2,
          h3: DesignSystem.H3,
          // Or define component inline
          p: props => <p {...props} className="text-red-700" />,
        }}
      >
        {" "}
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      mdxAST
      rawBody
    }
  }
`

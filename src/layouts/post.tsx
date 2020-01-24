import React from "react"
import { graphql, Link } from "gatsby"
import * as DesignSystem from "./design-system"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { Mdx } from "../../types/graphql-types"
import Layout from "./layout"

const Post: React.FC<{ data: Mdx }> = ({ data: { mdx } }) => (
  <Layout>
    <h1 class="text-blue-600 text-2xl">
      MDX Sourced Post: {mdx.frontmatter.title}
    </h1>
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        h1: DesignSystem.H1,
        h2: DesignSystem.H2,
        h3: DesignSystem.H3,
        // Or define component inline
        p: props => <p {...props} class="text-red-700" />,
        ul: props => (
          <ul className="tk-list-inside ml-6 list-disc pb-6">
            {props.children}
          </ul>
        ),
        ol: props => (
          <ol className="tk-list-inside list-decimal ml-6 pb-6">
            {props.children}
          </ol>
        ),
        li: props => (
          <li className="text-lg leading-relaxed">{props.children}</li>
        ),
      }}
    >
      {" "}
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </MDXProvider>
  </Layout>
)

export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`

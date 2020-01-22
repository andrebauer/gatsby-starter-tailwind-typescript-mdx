import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { AllPostsQuery } from "../../types/graphql-types"

const PostPage: React.FC<AllPostsQuery> = ({ data }) => (
  <Layout>
    <SEO title="Posts" />
    <h1 class="text-3xl">Posts</h1>
    <ul class="pl-4 list-disc">
      {data.allMdx.nodes.map(item => (
        <li key={item.fields.slug}>
          <Link to={item.fields.slug}>{item.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
    {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
  </Layout>
)

export default PostPage

export const postsQuery = graphql`
  query AllPosts {
    allMdx {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
        timeToRead
        excerpt
      }
    }
  }
`

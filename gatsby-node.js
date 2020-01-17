/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fs = require("fs")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = fs.readFileSync("./src/types/type-definitions.graphql", {
    encoding: "utf8",
  })
  createTypes(typeDefs)
}

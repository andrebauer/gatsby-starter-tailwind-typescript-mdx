import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { NavigationQuery } from "../../types/graphql-types"

export const Navigation = () => {
  const data: NavigationQuery = useStaticQuery(
    graphql`
      query Navigation {
        navigation: settingsYaml(id: { eq: "header" }) {
          navigation {
            href
            label
            linktype
            order
            visibility
          }
        }
      }
    `
  )
  //return <pre>{JSON.stringify(data.navigation?.navigation, null, 4)}</pre>
  return (
    <nav>
      <div class="px-3 bg-blue-200">
        <ul class="flex flex-wrap text-blue-600">
          {data.navigation?.navigation.map(item => (
            <li key={item.href} class="mr-2 pt-2 pr-2 pl-0 pb-4">
              {item.linktype === "internal" ? (
                <Link
                  class="hover:text-blue-500"
                  to={item.href}
                  activeClassName=""
                >
                  {item.label}
                </Link>
              ) : (
                <a class="" href={item.href} target="_blank">
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

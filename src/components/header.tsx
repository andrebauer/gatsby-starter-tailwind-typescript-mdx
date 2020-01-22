import { Link } from "gatsby"
import React from "react"

const Header: React.FC<{ siteTitle: String }> = ({ siteTitle }) => (
  <header class="bg-blue-800 text-blue-100 text-xl">
    <div class="mx-auto max-w-6xl p-2">
      <h1 class="m-0">
        <Link to="/" class="text-blue-100 hover:text-white">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from "react"

export const H1 = ({ children, margins, id }) => (
  <div className="">
    <h1
      id={id}
      className={`text-4xl sm:text-3xl font-light text-primary-600 ${margins ||
        "pt-8 pb-3"}`}
    >
      {children}
    </h1>
  </div>
)

export const H2 = ({ children, margins, id }) => (
  <div className="">
    <h2
      id={id}
      className={`text-primary-700 bg-primary-100 text-3xl ${margins ||
        "pt-6 pb-3"}`}
    >
      {children}
    </h2>
  </div>
)

export const H3 = ({ children, margins, id }) => (
  <h3 id={id} className={`text-primary-700 text-2xl ${margins || "pt-6 pb-3"}`}>
    {children}
  </h3>
)

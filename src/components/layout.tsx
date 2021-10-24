import * as React from "react"
import { Link } from "gatsby"
import { LangNav } from "./langNav"

const Layout = ({ location, title, children }) => {
  //@ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  console.log(location.pathname)
  let header

  if (isRootPath) {
    header = (
      <h1 className="font-bold text-3xl hover:underline">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="font-bold text-2xl hover:underline" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="container mx-auto" data-is-root-path={isRootPath}>
      <header className="py-4">
        {header}
        <LangNav />
      </header>
      <main>{children}</main>
      <footer className="py-4 text-sm">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a className="hover:underline" href="https://www.gatsbyjs.com">
          Gatsby
        </a>
        <br />
        <a className="hover:underline" href="https://www.facundoleites.com">
          facundoleites.com
        </a>{" "}
        <a
          className="hover:underline"
          href="https://instagram.com/leitesfacundo"
        >
          ig: @leitesfacundo
        </a>{" "}
        <a className="hover:underline" href="https://twitter.com/FacundoLeites">
          tw: @facundoleites
        </a>
      </footer>
    </div>
  )
}

export default Layout

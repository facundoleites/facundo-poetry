import { Link } from "gatsby"
import React, { PropsWithChildren } from "react"

export const LangNavItem: React.FC<PropsWithChildren<{ to: string }>> = ({
  to,
  children,
}) => {
  return (
    <Link
      to={to}
      style={{
        display: "block",
        paddingRight: "1rem",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  )
}
export const LangNav = () => {
  return (
    <div style={{ display: "flex" }}>
      <LangNavItem to="/es-AR">Español</LangNavItem>
      <span
        style={{
          display: "block",
          paddingRight: "1rem",
        }}
      >
        /
      </span>
      <LangNavItem to="/pt-BR">Portugês</LangNavItem>
    </div>
  )
}

import { Link } from "gatsby"
import React, { PropsWithChildren } from "react"

export const LangNavItem: React.FC<PropsWithChildren<{ to: string }>> = ({
  to,
  children,
}) => {
  return (
    <Link to={to} className="block mr-2 hover:underline">
      {children}
    </Link>
  )
}
export const LangNav = () => {
  return (
    <div className="flex text-xl">
      <LangNavItem to="/es-AR">Español</LangNavItem>
      <span className="block mr-2">/</span>
      <LangNavItem to="/pt-BR">Portugês</LangNavItem>
    </div>
  )
}

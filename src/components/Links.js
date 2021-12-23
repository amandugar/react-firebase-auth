import { Link } from "react-router-dom"

const Links = ({ children, path }) => {
  return (
    <Link to={path}>
      <div className="text-white rounded bg-slate-800 py-2 mx-4 px-3">
        {children}
      </div>
    </Link>
  )
}

export default Links

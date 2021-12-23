import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from "../containers/Profile"
import Login from "../containers/Login"
import Signup from "../containers/Signup"
import PasswordReset from "../containers/PasswordReset"
import { AuthProvider } from "../context/AuthContext"
import Home from "../views/Home"

const RouterComp = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/accounts/email-signup" element={<Signup />} />
          <Route exact path="/accounts/sign-in" element={<Login />} />
          <Route
            exact
            path="/accounts/password/reset"
            element={<PasswordReset />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default RouterComp

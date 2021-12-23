import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import SignupScreen from "../views/SignupScreen"

const Signup = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const emailRef = useRef()
  const passwordRef = useRef()
  const fullNameRef = useRef()

  const { signup, isAuthenticated } = useAuth()
  const navigator = useNavigate()

  const handleSignup = e => {
    e.preventDefault()
    setError("")

    const email = emailRef.current.value
    const password = passwordRef.current.value
    const fullName = fullNameRef.current.value

    signup(email, password, fullName)
      .then(ref => {
        navigator("/profile")
      })
      .catch(err => {
        setError(err.message)
      })
  }

  return (
    <SignupScreen
      emailRef={emailRef}
      passwordRef={passwordRef}
      fullNameRef={fullNameRef}
      handleSignup={handleSignup}
      loading={loading}
      error={error}
      isAuthenticated={isAuthenticated}
    />
  )
}

export default Signup

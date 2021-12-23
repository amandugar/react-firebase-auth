import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import LoginScreen from "../views/Login"

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const emailRef = useRef()
  const passwordRef = useRef()

  const { signin, setIsAuthenticated, isAuthenticated } = useAuth()
  const navigator = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigator("/profile")
    }
  }, [])

  const handleSignin = e => {
    e.preventDefault()
    setError("")

    const email = emailRef.current.value
    const password = passwordRef.current.value
    signin(email, password)
      .then(ref => {
        setIsAuthenticated(true)
        navigator("/profile")
      })
      .catch(error => {
        setError(error.message)
      })
  }
  return (
    <LoginScreen
      emailRef={emailRef}
      passwordRef={passwordRef}
      error={error}
      loading={loading}
      handleSignin={handleSignin}
      isAuthenticated={isAuthenticated}
    />
  )
}

export default Login

import { useRef, useState } from "react"
import { useAuth } from "../context/AuthContext"
import PasswordResetView from "../views/PasswordReset"

const PasswordReset = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const emailRef = useRef()

  const { passwordReset } = useAuth()

  const handlePasswordReset = e => {
    e.preventDefault()
    setError("")
    setMessage("")
    const email = emailRef.current.value
    passwordReset(email)
      .then(msg => {
        setMessage("Password reset email sent to: " + email)
        console.log(msg)
      })
      .catch(error => {
        setError(error.message)
        console.log("yes")
      })
  }

  return (
    <PasswordResetView
      loading={loading}
      error={error}
      message={message}
      handlePasswordReset={handlePasswordReset}
      emailRef={emailRef}
    />
  )
}

export default PasswordReset

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import ProfileScreen from "../views/ProfileScreen"

const Profile = () => {
  const { isAuthenticated, signout, currentUser } = useAuth()
  const navigator = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigator("/accounts/sign-in")
    }
  }, [isAuthenticated, navigator])

  if (isAuthenticated)
    return (
      <ProfileScreen
        name={currentUser.displayName}
        email={currentUser.email}
        signout={signout}
      />
    )
  else {
    return <div>You are not authenticated</div>
  }
}

export default Profile

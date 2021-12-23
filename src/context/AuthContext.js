import { useContext, useState, useEffect, createContext } from "react"
import firebaseConfig from "../adapters/firebase"

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from "firebase/auth"
import { initializeApp } from "firebase/app"

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}
initializeApp(firebaseConfig)
const auth = getAuth()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const signup = async (email, password, fullName) => {
    let promise = await createUserWithEmailAndPassword(auth, email, password)
      .then(ref => {
        updateProfile(ref.user, {
          displayName: fullName,
        })
        setCurrentUser(ref.user)
      })
      .catch(error => {
        throw error
      })
    return promise
  }

  const signin = async (email, password) => {
    let promise = await signInWithEmailAndPassword(auth, email, password)
      .then(data => {
        setCurrentUser(data.user)
      })
      .catch(error => {
        throw error
      })
    return promise
  }

  const passwordReset = async email => {
    let promise = await sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Email sent to " + email)
      })
      .catch(error => {
        throw error
      })
    return promise
  }

  const signout = () => {
    setCurrentUser(null)
    setIsAuthenticated(false)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [currentUser])

  const value = {
    currentUser,
    signup,
    signin,
    passwordReset,
    signout,
    isAuthenticated,
    setIsAuthenticated,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading ? (
        children
      ) : (
        <div className="flex items-center flex-col justify-center w-full h-full">
          <h1 className="text-6xl">Loading...</h1>
        </div>
      )}
    </AuthContext.Provider>
  )
}

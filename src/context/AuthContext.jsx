"use client"

import { createContext, useState, useContext, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem("token") || null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if there's a token in localStorage
    const storedToken = localStorage.getItem("token")
    const storedUser = localStorage.getItem("user")

    if (storedToken && storedUser) {
      setToken(storedToken)
      setCurrentUser(JSON.parse(storedUser))
    }

    setLoading(false)
  }, [])

  const login = (newToken, user) => {
    localStorage.setItem("token", newToken)
    localStorage.setItem("user", JSON.stringify(user))
    setToken(newToken)
    setCurrentUser(user)
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setToken(null)
    setCurrentUser(null)
  }

  const isAuthenticated = () => {
    return !!token
  }

  const isAdmin = () => {
    return currentUser?.role === "admin"
  }

  const value = {
    currentUser,
    token,
    login,
    logout,
    isAuthenticated,
    isAdmin,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

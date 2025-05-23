"use client"
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth()

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (!isAuthenticated()) {
    return <Navigate to="/login" />
  }

  if (requireAdmin && !isAdmin()) {
    return <Navigate to="/dashboard" />
  }

  return children
}

export default ProtectedRoute

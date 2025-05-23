"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useAuth } from "../context/AuthContext"

const Dashboard = () => {
  const { currentUser, token } = useAuth()
  const [stats, setStats] = useState({
    totalProduction: 0,
    pendingOrders: 0,
    inventory: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // In a real app, you would fetch this data from your API
        // For now, we'll simulate a delay and use mock data
        setTimeout(() => {
          setStats({
            totalProduction: 1250,
            pendingOrders: 8,
            inventory: 540,
          })
          setLoading(false)
        }, 1000)

        // Example of how you would fetch real data:
        // const response = await axios.get('http://localhost:5000/api/dashboard', {
        //   headers: { Authorization: `Bearer ${token}` }
        // });
        // setStats(response.data);
        // setLoading(false);
      } catch (err) {
        setError("Failed to load dashboard data")
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [token])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700">{error}</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Welcome, {currentUser.username}!</h2>
          <p className="text-gray-600">
            You are logged in as a{currentUser.role === "admin" ? "n" : ""}{" "}
            <span className="font-medium">{currentUser.role}</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: "Total Production", value: `${stats.totalProduction} kg`, color: "bg-green-100 text-green-800" },
            { title: "Pending Orders", value: stats.pendingOrders, color: "bg-blue-100 text-blue-800" },
            { title: "Current Inventory", value: `${stats.inventory} kg`, color: "bg-yellow-100 text-yellow-800" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className={`p-4 ${stat.color}`}>
                <h3 className="font-medium">{stat.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: "Production batch #1234 completed", time: "2 hours ago" },
              { action: "New order received from Client XYZ", time: "5 hours ago" },
              { action: "Quality check passed for batch #1233", time: "Yesterday" },
              { action: "Inventory updated", time: "2 days ago" },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex justify-between border-b pb-2"
              >
                <span>{activity.action}</span>
                <span className="text-gray-500 text-sm">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard

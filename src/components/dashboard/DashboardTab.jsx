"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const DashboardTab = () => {
  const [stats, setStats] = useState({
    totalProduction: 0,
    pendingOrders: 0,
    inventory: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch dashboard data
    const fetchDashboardData = async () => {
      try {
        // API call will be implemented here
        setTimeout(() => {
          setStats({
            totalProduction: 1250,
            pendingOrders: 8,
            inventory: 540,
          })
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  if (loading) {
    return (
      <div className="p-8 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-600"></div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Dashboard Overview</h2>

      {/* Stats Grid */}
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
            className="bg-white border rounded-lg overflow-hidden"
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

      {/* Recent Activity */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h3>
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
    </div>
  )
}

export default DashboardTab

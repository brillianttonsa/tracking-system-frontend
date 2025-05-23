"use client"

const ReportsTab = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Reports</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Report options will be implemented here */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-3">📊</div>
            <h3 className="text-lg font-semibold">Production Reports</h3>
          </div>
          <p className="text-gray-600 mb-4">Generate detailed production analytics and summaries</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
            Generate Report
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-3">📈</div>
            <h3 className="text-lg font-semibold">Quality Reports</h3>
          </div>
          <p className="text-gray-600 mb-4">View quality control metrics and trends</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
            Generate Report
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-3">📦</div>
            <h3 className="text-lg font-semibold">Inventory Reports</h3>
          </div>
          <p className="text-gray-600 mb-4">Track inventory levels and movements</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
            Generate Report
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-3">💰</div>
            <h3 className="text-lg font-semibold">Financial Reports</h3>
          </div>
          <p className="text-gray-600 mb-4">Analyze costs and profitability</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReportsTab

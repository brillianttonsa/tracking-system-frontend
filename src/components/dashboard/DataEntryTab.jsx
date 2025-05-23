"use client"

const DataEntryTab = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Data Entry</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Data entry forms will be implemented here */}
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-lg font-semibold mb-2">Production Entry</h3>
          <p className="text-gray-600 mb-4">Record new production batches</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
            Add Entry
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <div className="text-4xl mb-4">🌽</div>
          <h3 className="text-lg font-semibold mb-2">Raw Material Entry</h3>
          <p className="text-gray-600 mb-4">Log incoming raw materials</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
            Add Entry
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-lg font-semibold mb-2">Quality Control</h3>
          <p className="text-gray-600 mb-4">Record quality assessments</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
            Add Entry
          </button>
        </div>
      </div>
    </div>
  )
}

export default DataEntryTab

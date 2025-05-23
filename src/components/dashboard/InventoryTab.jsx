"use client"

const InventoryTab = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Inventory Tracking</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory sections will be implemented here */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Raw Materials</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white rounded border">
              <span>Maize Kernels</span>
              <span className="font-semibold">2,500 kg</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded border">
              <span>Packaging Materials</span>
              <span className="font-semibold">1,200 units</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded border">
              <span>Additives</span>
              <span className="font-semibold">150 kg</span>
            </div>
          </div>
          <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors w-full">
            Update Inventory
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Finished Products</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white rounded border">
              <span>Fine Flour (1kg)</span>
              <span className="font-semibold">850 bags</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded border">
              <span>Coarse Flour (2kg)</span>
              <span className="font-semibold">420 bags</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded border">
              <span>Premium Flour (500g)</span>
              <span className="font-semibold">1,100 bags</span>
            </div>
          </div>
          <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors w-full">
            Update Stock
          </button>
        </div>
      </div>

      {/* Low Stock Alerts */}
      <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <h4 className="text-lg font-semibold text-red-800 mb-2">Low Stock Alerts</h4>
        <div className="space-y-2">
          <p className="text-red-700">⚠️ Packaging Materials: Only 1,200 units remaining</p>
          <p className="text-red-700">⚠️ Additives: Only 150 kg remaining</p>
        </div>
      </div>
    </div>
  )
}

export default InventoryTab

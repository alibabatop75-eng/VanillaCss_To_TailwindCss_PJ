import React from 'react'

const Regions = () => {
  return (
    <section id='regions' className="w-full py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-rufina text-green-800 mb-4">OUR REGIONS</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, accusantium quo! Expedita sint iusto quaerat excepturi velit similique.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <img 
              src="/region1.jpg" 
              alt="mountains" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-rufina text-gray-800 mb-2">Mountains</h2>
              <p className="text-gray-600"><span className="font-bold text-green-900">90</span> Properties</p> 
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <img 
              src="/region2.jpg" 
              alt="coastline" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-rufina text-gray-800 mb-2">Coastline</h2>
              <p className="text-gray-600"><span className="font-bold text-green-900">52</span> Properties</p> 
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Regions
import React from 'react'
// Uncomment or add imports for any icons or images you want to include
import { AlertTriangle, Info } from 'lucide-react'
import core from '../../assets/core.jpg'
import ImageWithZoom from '../../components/ImageWithZoom'

const CorePrinciples = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Core Principles</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Core Principles Overview</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ImageWithZoom 
                src={core} 
                alt="Core Principles" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-gray-500 text-center">Core Principles Overview</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CorePrinciples

import React from 'react'
// Uncomment or add imports for any icons or images you want to include
import { AlertTriangle, Info } from 'lucide-react'
import core from '../../assets/core.jpg'
import ImageWithZoom from '../../components/ImageWithZoom'

const CorePrinciples = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Core Principles</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-6">
              Building on our North Star - Elevating Partners to Impact Community Patients – the CCC seeks to accomplish our Strategic Pillars through the Core Principles that address each pillar.
            </p>
            
            <h3 className="text-xl text-red-800 mb-4">Core Principles:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Address unmet patient needs</li>
              <li>Enable community sites to better serve patients</li>
              <li>Build trust within communities</li>
              <li>Develop enabling education that is Right Sized, Personalized</li>
              <li>Create intentional linkages between projects, data, and advocate voices</li>
              <li>Support change opportunities that positively impact partners, communities, patients</li>
            </ul>
          </section>

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

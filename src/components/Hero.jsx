import React from 'react'
import { Heart, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="section-container py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-primary-600" fill="currentColor" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Overcoming Cancer Guidebook
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 italic">
            "Let food be thy medicine and medicine be thy food."
          </p>
          <p className="text-lg text-gray-500 mb-8">- Hippocrates</p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              A comprehensive guide created with love, prayer, and hundreds of hours of research 
              to help you or your loved ones in the fight against cancer. This guidebook provides 
              evidence-based protocols, nutritional guidance, and practical tools for your healing journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#protocol" className="btn-primary">
              View Protocol
            </a>
            <a href="#nutrition" className="btn-secondary">
              Nutrition Guide
            </a>
          </div>

          <div className="mt-12 animate-bounce">
            <ArrowDown className="w-8 h-8 text-primary-600 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from 'react'
import { Heart, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-16 relative overflow-hidden">
      {/* Wavy Green Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-100 to-teal-100">
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="white" 
            fillOpacity="0.3" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg className="absolute bottom-0 w-full h-40" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="white" 
            fillOpacity="0.5" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg className="absolute bottom-0 w-full h-48" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="white" 
            fillOpacity="1" 
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <div className="section-container py-20 md:py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-emerald-600" fill="currentColor" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Overcoming Cancer Guidebook
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 italic">
            "Let food be thy medicine and medicine be thy food."
          </p>
          <p className="text-lg text-gray-600 mb-8">- Hippocrates</p>
          
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
            <ArrowDown className="w-8 h-8 text-emerald-600 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

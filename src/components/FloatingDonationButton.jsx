import React, { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import DonationModal from './DonationModal'

const FloatingDonationButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary-600 to-primary-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
        aria-label="Support our work"
      >
        <div className="relative">
          <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" />
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-75"></span>
        </div>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Support Our Work
        </span>
      </button>

      {/* Donation Modal */}
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default FloatingDonationButton

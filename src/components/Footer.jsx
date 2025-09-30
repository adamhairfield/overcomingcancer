import React, { useState } from 'react'
import { Heart, Mail } from 'lucide-react'
import DonationModal from './DonationModal'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-primary-400" fill="currentColor" />
                <h3 className="text-xl font-bold">Overcoming Cancer</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                A comprehensive guidebook created with love, prayer, and hundreds of hours of research 
                to help you in your healing journey.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <a 
                  href="mailto:lesliehairfield@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>lesliehairfield@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-bold mb-4">Support This Work</h3>
              <p className="text-gray-400 mb-4">
                If this guidebook has helped you, consider giving a financial gift:
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                <Heart className="w-5 h-5" fill="currentColor" />
                Donate Now
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              Created by Leslie Hairfield with love for her mother and all those fighting cancer
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Overcoming Cancer Guidebook. This information is for educational 
              purposes only and is not medical advice.
            </p>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  )
}

export default Footer

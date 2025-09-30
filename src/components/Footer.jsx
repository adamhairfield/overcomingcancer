import React from 'react'
import { Heart, Mail, DollarSign } from 'lucide-react'

const Footer = () => {
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
              <p className="text-gray-400 mb-3">
                If this guidebook has helped you, consider giving a financial gift:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <DollarSign className="w-5 h-5 text-primary-400" />
                  <span>Cashapp: <span className="text-primary-400">$lesliehairfield</span></span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <DollarSign className="w-5 h-5 text-primary-400" />
                  <span>Venmo: <span className="text-primary-400">@adamhairfield</span></span>
                </div>
              </div>
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
    </footer>
  )
}

export default Footer

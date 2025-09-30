import React from 'react'
import { User, Mail, DollarSign } from 'lucide-react'

const Introduction = () => {
  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About This Guidebook
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              My name is <strong>Leslie Hairfield</strong>. I am a wife to Adam and mother to 7 amazing children. 
              I am primarily just a mom with an ongoing passion for health, science and gardening.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This guidebook was originally created for my mother as she fights stage 4 colon cancer. 
              Hundreds and hundreds of hours of my personal research have gone into the making of this 
              interactive document all with the intent of saving her precious life.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              As this guidebook was being made, I had this sense that it was not just for her. She often 
              told me to write everything down, not just for her benefit but for the benefit of others.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              What you are about to read comes from a place of great love, prayer and investigative study. 
              It is certainly not a one stop shop but was sufficient enough to give my mom tools and hope 
              to win her battle against cancer. My hope and prayer for you or the person you are gathering 
              this information for, is that you overcome the big C and live a long, happy life filled with 
              much joy and vibrant health.
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                This guidebook is a gift for anyone who needs it.
              </p>
              <p className="text-gray-700 mb-4">
                If your heart is stirred and you would like to give a financial gift as a thank you for my time, 
                thank you in advance!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold">Cashapp:</span>
                  <span className="text-primary-600">$lesliehairfield</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold">Venmo:</span>
                  <span className="text-primary-600">@adamhairfield</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="w-5 h-5 text-primary-600" />
              <span>Questions? Reach out at</span>
              <a href="mailto:lesliehairfield@gmail.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                lesliehairfield@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction

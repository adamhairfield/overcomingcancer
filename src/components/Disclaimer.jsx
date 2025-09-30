import React from 'react'
import { AlertTriangle } from 'lucide-react'

const Disclaimer = () => {
  return (
    <section className="bg-red-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-red-500 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-red-900">
                Important Medical Disclaimer
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This guidebook is intended for <strong>informational purposes only</strong> and does not 
                constitute medical advice. The information contained herein is not a substitute for, and 
                should never be used to replace, professional medical advice, diagnosis, or treatment.
              </p>

              <p>
                <strong>Always seek the advice of your physician or other qualified healthcare provider</strong> with 
                any questions you may have regarding a medical condition. Never disregard professional medical 
                advice or delay in seeking it because of something you have read in this guidebook.
              </p>

              <p>
                The use of any information provided in this guide is solely at your own risk. The author and 
                publisher of this guide are not responsible for any adverse effects or consequences resulting 
                from the use of any of the suggestions, preparations, or procedures described in this guidebook.
              </p>

              <p>
                The therapies and substances discussed in this guide, particularly those described as 
                "complementary" or "alternative," may have serious interactions with conventional medical 
                treatments. Some may be ineffective or even harmful.
              </p>

              <p className="font-semibold text-red-900 text-lg">
                It is essential that you discuss any and all of these therapies with your oncologist or 
                primary care physician before beginning any new treatment regimen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Disclaimer

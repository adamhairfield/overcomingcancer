import React from 'react'
import { Pill, ExternalLink, Info } from 'lucide-react'

const Protocol = () => {
  return (
    <section id="protocol" className="bg-white">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Pill className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ivermectin & Mebendazole/Fenbendazole Protocol
            </h2>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-2">
              <Info className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-700 mb-2">
                  To learn more about the differences between Mebendazole and Fenbendazole,{' '}
                  <a 
                    href="https://www.drwilliammakis.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
                  >
                    read here
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ivermectin Dosage</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold mt-1">•</span>
                  <span><strong>Standard:</strong> 24mg daily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold mt-1">•</span>
                  <span><strong>Aggressive cancers:</strong> Up to 1mg/kg/day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold mt-1">•</span>
                  <span><strong>Example:</strong> If you weigh 100 pounds (45kg), take 45mg daily</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mebendazole/Fenbendazole</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold mt-1">•</span>
                  <span><strong>Mebendazole:</strong> 200-400mg daily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold mt-1">•</span>
                  <span><strong>Fenbendazole:</strong> 222-300mg daily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold mt-1">•</span>
                  <span><strong>Aggressive cancers:</strong> Doses may increase up to 1 gram daily</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Customized Dosage for Stage 4 Colon Cancer / Ascites Present
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                <strong>Ivermectin 25mg / Mebendazole 250mg</strong> taken twice daily
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  <span><strong>First dose:</strong> Morning on empty stomach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  <span><strong>Second dose:</strong> Evening, after dinner/before bed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  <span><strong>Total daily dose:</strong> Ivermectin 50mg / Mebendazole 500mg</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sources for Purchasing
            </h3>
            <p className="text-gray-700 mb-4">
              There are many sources to purchase Ivermectin, Fenbendazole and Mebendazole from. 
              We personally use All Family Pharmacy and have seen great results from their Iver/Meben 25/250 combo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://allfamilypharmacy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                All Family Pharmacy
                <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="https://right2try.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                Right 2 Try
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Protocol

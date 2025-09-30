import React, { useState, useEffect, useRef } from 'react'
import { Pill, ExternalLink, Info } from 'lucide-react'
import DonationModal from './DonationModal'

const Protocol = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef(null)
  const hasShownModal = useRef(false)

  useEffect(() => {
    // Check if we've already shown the modal this session
    const modalShown = sessionStorage.getItem('donation_modal_shown')
    if (modalShown === 'true') {
      hasShownModal.current = true
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If section is visible and we haven't shown the modal yet
          if (entry.isIntersecting && !hasShownModal.current) {
            // Small delay to ensure smooth scroll
            setTimeout(() => {
              setIsModalOpen(true)
              hasShownModal.current = true
              sessionStorage.setItem('donation_modal_shown', 'true')
            }, 500)
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <>
      <section id="protocol" className="bg-white" ref={sectionRef}>
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Pill className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ivermectin, Mebendazole & Fenbendazole Protocol
            </h2>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-2">
              <Info className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-700 mb-2">
                  To learn more about the differences between Mebendazole and Fenbendazole,{' '}
                  <a 
                    href="https://www.onedaymd.com/2023/12/fenbendazole-vs-mebendazole-what-is.html" 
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

          {/* Dr. William Makis Dosage Tables */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Dr. William Makis MD - Protocol for Cancer
            </h3>
            
            {/* Ivermectin Dosage Table */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-center mb-4 text-red-700">IVERMECTIN DOSAGE</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border-2 border-gray-300">
                  <thead>
                    <tr>
                      <th className="bg-green-400 border-2 border-gray-300 p-3 text-white font-bold">LOW DOSE</th>
                      <th className="bg-yellow-300 border-2 border-gray-300 p-3 font-bold">MEDIUM DOSE</th>
                      <th className="bg-pink-300 border-2 border-gray-300 p-3 font-bold">HIGH DOSE</th>
                      <th className="bg-red-500 border-2 border-gray-300 p-3 text-white font-bold">VERY HIGH DOSE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="bg-green-100 border-2 border-gray-300 p-3 text-center font-semibold">≤ 0.5mg/kg</td>
                      <td className="bg-yellow-50 border-2 border-gray-300 p-3 text-center font-semibold">1.0mg/kg</td>
                      <td className="bg-pink-100 border-2 border-gray-300 p-3 text-center font-semibold">2.0mg/kg</td>
                      <td className="bg-red-100 border-2 border-gray-300 p-3 text-center font-semibold">≥ 2.5mg/kg</td>
                    </tr>
                    <tr>
                      <td className="bg-green-50 border-2 border-gray-300 p-3 text-sm">Cancers in remission Strong family history Genetic predisposition Prophylaxis</td>
                      <td className="bg-yellow-50 border-2 border-gray-300 p-3 text-sm">Starting dose for most cancers</td>
                      <td className="bg-pink-50 border-2 border-gray-300 p-3 text-sm">Dose for very aggressive cancers (leukemia, pancreas, brain cancers)</td>
                      <td className="bg-red-50 border-2 border-gray-300 p-3 text-sm">Extensive metastatic disease Extremely poor prognosis Brain cancers?</td>
                    </tr>
                    <tr>
                      <td className="bg-green-50 border-2 border-gray-300 p-3 text-sm">No long term side effects</td>
                      <td className="bg-yellow-50 border-2 border-gray-300 p-3 text-sm">No long term side effects</td>
                      <td className="bg-pink-50 border-2 border-gray-300 p-3 text-sm">No long term side effects</td>
                      <td className="bg-red-50 border-2 border-gray-300 p-3 text-sm">Possible short term & transient visual effects</td>
                    </tr>
                    <tr>
                      <td className="bg-green-50 border-2 border-gray-300 p-3 text-xs">Dr. Tess Lawrie reported a case of Stage 3 Ovarian Cancer, treated with chemo and 12mg of IVM per day. Ca125 dropped 288 to 22 after 2 months. Tumor vanished.</td>
                      <td className="bg-yellow-50 border-2 border-gray-300 p-3 text-xs">Dr. Shankara Chetty reported a 70 yo prostate ca patient with PSA 89, placed on 45mg IVM per day, after two months, PSA dropped from 89.1 to 10.9. IVM given in combination with Lactoferrin.</td>
                      <td className="bg-pink-50 border-2 border-gray-300 p-3 text-xs">Dr. Allan Landrito had a Stage 4 gallbladder patient who took 2mg/kg/day for 14 months (cancer disappeared)</td>
                      <td className="bg-red-50 border-2 border-gray-300 p-3 text-xs">Dr. Shankara Chetty had a patient on 2.5mg/kg/day with no side effects</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Fenbendazole Dosage Table */}
            <div>
              <h4 className="text-xl font-bold text-center mb-4 text-red-700">FENBENDAZOLE DOSAGE</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border-2 border-gray-300">
                  <thead>
                    <tr>
                      <th className="bg-green-400 border-2 border-gray-300 p-3 text-white font-bold">LOW DOSE</th>
                      <th className="bg-yellow-300 border-2 border-gray-300 p-3 font-bold">MEDIUM DOSE</th>
                      <th className="bg-pink-300 border-2 border-gray-300 p-3 font-bold">HIGH DOSE</th>
                      <th className="bg-red-500 border-2 border-gray-300 p-3 text-white font-bold">VERY HIGH DOSE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="bg-green-100 border-2 border-gray-300 p-3 text-center font-semibold">222mg 3x per week</td>
                      <td className="bg-yellow-50 border-2 border-gray-300 p-3 text-center font-semibold">222mg/day (6 days a week)</td>
                      <td className="bg-pink-100 border-2 border-gray-300 p-3 text-center font-semibold">444mg/day (6 days a week)</td>
                      <td className="bg-red-100 border-2 border-gray-300 p-3 text-center font-semibold">888mg or 1000mg/day (6 days a week)</td>
                    </tr>
                    <tr>
                      <td className="bg-green-50 border-2 border-gray-300 p-3 text-sm">Cancers in remission Strong family history Genetic predisposition Prophylaxis</td>
                      <td className="bg-yellow-50 border-2 border-gray-300 p-3 text-sm">Starting dose for most cancers Weight &lt; 200lb</td>
                      <td className="bg-pink-50 border-2 border-gray-300 p-3 text-sm">mRNA Turbo Cancer Aggressive Cancers Stage 4 Weight 200+ lb</td>
                      <td className="bg-red-50 border-2 border-gray-300 p-3 text-sm">Extensive metastatic disease Extremely poor prognosis</td>
                    </tr>
                    <tr>
                      <td className="bg-green-50 border-2 border-gray-300 p-3 text-sm">Check liver function & kidney function</td>
                      <td className="bg-yellow-50 border-2 border-gray-300 p-3 text-sm">Check liver function & kidney function</td>
                      <td className="bg-pink-50 border-2 border-gray-300 p-3 text-sm">Check liver function & kidney function</td>
                      <td className="bg-red-50 border-2 border-gray-300 p-3 text-sm">Check liver function & kidney function</td>
                    </tr>
                    <tr>
                      <td className="bg-green-50 border-2 border-gray-300 p-3 text-xs">222mg Fenbendazole 3 days on, 4 days off(panacur C) Vitamin E 800 IU/ day Curcumin 600mg/day CBD oil 25mg/day</td>
                      <td className="bg-yellow-50 border-2 border-gray-300 p-3 text-xs">Taken with/after meal Milk Thistle 250mg twice a day with food (liver support)</td>
                      <td className="bg-pink-50 border-2 border-gray-300 p-3 text-xs">Taken with/after meal Milk Thistle 250mg twice a day with food (liver support)</td>
                      <td className="bg-red-50 border-2 border-gray-300 p-3 text-xs">Max 30-50mg/kg/day for 5 days (very rarely used in this dose range)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

    {/* Donation Modal */}
    <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Protocol

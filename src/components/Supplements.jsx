import React from 'react'
import { Pill, ExternalLink, ShoppingCart } from 'lucide-react'

const Supplements = () => {
  const supplements = [
    {
      name: 'Milk Thistle with Dandelion Root',
      dosage: '500mg total daily (two capsules)',
      purpose: 'Liver support',
      link: 'https://www.amazon.com'
    },
    {
      name: 'Vitamin D3/K2',
      dosage: '2500IU/62.5mcg daily',
      purpose: 'Immune support',
      link: 'https://www.amazon.com'
    },
    {
      name: 'Bio-available Curcumin',
      dosage: '600mg daily (300mg after breakfast, 300mg after lunch)',
      purpose: 'Anti-inflammatory',
      link: 'https://www.amazon.com'
    },
    {
      name: 'Enhanced Absorption Berberine',
      dosage: '500mg daily',
      purpose: 'Starves cancer cells of sugar',
      link: 'https://www.amazon.com'
    },
    {
      name: 'Probiotics',
      dosage: 'Recommended dose daily on empty stomach',
      purpose: 'Gut health',
      link: 'https://www.amazon.com'
    },
    {
      name: 'Beef Liver Capsules',
      dosage: '6 capsules daily (2 with each meal)',
      purpose: 'Blood building, nutrient dense',
      link: 'https://www.amazon.com'
    },
    {
      name: 'Organic Alfalfa Greens',
      dosage: '6 capsules daily (2 with each meal)',
      purpose: 'Blood building, mineral rich',
      link: 'https://www.amazon.com'
    },
    {
      name: 'Methylated Multivitamin',
      dosage: 'Daily',
      purpose: 'Complete nutrition',
      link: 'https://www.amazon.com'
    },
    {
      name: 'Baja Gold Mineral Salt',
      dosage: 'At least twice daily',
      purpose: 'Essential minerals and electrolyte support',
      link: 'https://www.amazon.com'
    }
  ]

  const recommendedProducts = [
    { name: 'Grounding Sheets', purpose: 'Reduce inflammation, improve sleep' },
    { name: 'Reverse Osmosis In-Home Water Filter', purpose: 'Remove toxins from water' },
    { name: 'Stainless Steel Water Bottle', purpose: 'Avoid microplastics' },
    { name: 'Revive Essential Oil Cleaning Concentrate', purpose: 'Non-toxic cleaning' },
    { name: 'Natural Laundry Detergent', purpose: 'Reduce chemical exposure' }
  ]

  return (
    <section id="supplements" className="bg-white">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Pill className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Recommended Supplements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {supplements.map((supplement, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{supplement.name}</h3>
                <p className="text-gray-700 mb-1">
                  <strong>Dosage:</strong> {supplement.dosage}
                </p>
                <p className="text-gray-600 mb-3">
                  <strong>Purpose:</strong> {supplement.purpose}
                </p>
                <a 
                  href={supplement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                >
                  View on Amazon
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart className="w-8 h-8 text-primary-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Recommended Purchases for Healing & Reducing Toxin Exposure
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendedProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-1">{product.name}</h4>
                  <p className="text-gray-600 text-sm">{product.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Supplements

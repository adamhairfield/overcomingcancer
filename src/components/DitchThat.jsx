import React, { useState } from 'react'
import { ArrowRight, Home, Droplet, Sparkles } from 'lucide-react'

const DitchThat = () => {
  const [activeCategory, setActiveCategory] = useState('kitchen')

  const swaps = {
    kitchen: [
      {
        ditch: 'Plastic water bottles',
        use: 'Filtered water from home in stainless steel or glass bottles. Reverse osmosis home filter recommended ($250-$500)'
      },
      {
        ditch: 'Plastic plates, utensils, containers',
        use: 'Glass, stainless steel, bamboo, or lead-free ceramics'
      },
      {
        ditch: 'Microwave',
        use: 'Oven, stovetop, blackstone, grill (microwaves denature food and make it carcinogenic)'
      },
      {
        ditch: 'Non-stick pots and pans',
        use: 'Stainless steel or cast iron'
      },
      {
        ditch: 'Plastic and rubber cooking utensils',
        use: 'Stainless steel or wood'
      },
      {
        ditch: 'Plastic cutting boards',
        use: 'Wood or stainless steel'
      },
      {
        ditch: 'Plastic food storage',
        use: 'Glass food storage (lids can be plastic if food doesn\'t touch it)'
      }
    ],
    body: [
      {
        ditch: 'Conventional lotions',
        use: 'Natural, organic lotions without parabens or synthetic fragrances'
      },
      {
        ditch: 'Conventional shampoo/conditioner',
        use: 'Natural, sulfate-free alternatives'
      },
      {
        ditch: 'Conventional soaps',
        use: 'Natural, organic soaps'
      },
      {
        ditch: 'Conventional toothpaste',
        use: 'Fluoride-free, natural toothpaste'
      },
      {
        ditch: 'Plastic toothbrushes',
        use: 'Bamboo toothbrushes'
      },
      {
        ditch: 'Conventional deodorants',
        use: 'Natural, aluminum-free deodorants'
      },
      {
        ditch: 'Conventional makeup',
        use: 'Natural, organic makeup'
      },
      {
        ditch: 'Synthetic perfumes',
        use: 'Essential oils'
      }
    ],
    cleaning: [
      {
        ditch: 'Conventional dish soap',
        use: 'Natural, plant-based dish soap'
      },
      {
        ditch: 'Conventional dishwasher detergent',
        use: 'Natural, phosphate-free alternatives'
      },
      {
        ditch: 'Jet dry',
        use: 'Alcohol oxalate-free, exotholate-free alternatives'
      },
      {
        ditch: 'Air fresheners, plug-ins, sprays',
        use: 'Essential oil diffusers'
      },
      {
        ditch: 'Conventional laundry detergent',
        use: 'Natural, fragrance-free laundry detergent'
      },
      {
        ditch: 'Conventional oxi clean',
        use: 'Natural oxygen bleach alternatives'
      },
      {
        ditch: 'Dryer sheets',
        use: 'Wool dryer balls with essential oils'
      },
      {
        ditch: 'Conventional candles',
        use: 'Beeswax or soy candles with essential oils'
      }
    ],
    food: [
      {
        ditch: 'Artificial sweeteners',
        use: 'Real organic sweeteners (maple syrup, raw honey) or no sweetener'
      },
      {
        ditch: 'Seed oils (canola, vegetable, soybean)',
        use: 'Grassfed butter, ghee, beef tallow, coconut oil, olive oil, avocado oil'
      },
      {
        ditch: 'Conventional sugar',
        use: 'Pure maple syrup or raw honey (use sparingly)'
      }
    ]
  }

  const categories = [
    { id: 'kitchen', label: 'Kitchen', icon: Home },
    { id: 'body', label: 'Body & Oral Care', icon: Sparkles },
    { id: 'cleaning', label: 'Cleaning & Laundry', icon: Droplet },
    { id: 'food', label: 'Food', icon: ArrowRight }
  ]

  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <ArrowRight className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ditch That / Use This
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              Reducing toxin exposure is crucial for healing. Make these simple swaps to create a healthier 
              environment that supports your body's fight against cancer.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-5 h-5" />
                    <span>{category.label}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Swaps List */}
          <div className="space-y-4">
            {swaps[activeCategory].map((swap, index) => (
              <div key={index} className="card">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                    <h4 className="font-bold text-red-900 mb-2">❌ Ditch This</h4>
                    <p className="text-gray-700">{swap.ditch}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">✓ Use This</h4>
                    <p className="text-gray-700">{swap.use}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DitchThat
